import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as TYPES from '../../config/messageTypes';

import { setResponse, sendMessage } from '../../actions/ChatbotActions';

import Progress from './Progress';

class messageInput extends Component {
  handleChange = (response, message) => {
    const formattedMessage = message ? message : response
    this.props.setResponse(response, formattedMessage);
  }

  handlePress = () => {
    const { userId, terminalId, currentMessage, response, message } = this.props;

    if (response.length > 0 || response > 0) {
      this.props.sendMessage(userId, terminalId, currentMessage.key, response, message);
    }
  }

  renderInput = () => {
    switch(this.props.currentMessage.type) {
      case TYPES.TEXT:
        return <TextInput onChangeText={(text) => this.handleChange(text)} />
      case TYPES.PROGRESS:
        return <Progress onChange={(response, message) => this.handleChange(response, message)} />;
    }
  }

  render() {
    const { response } = this.props;

    return (
      <View>
        { this.renderInput() }
        <Button
          onPress={this.handlePress}
          title="Envoyer"
          disabled={response.length === 0}
        />
      </View>
    )
  }
}

messageInput.propTypes = {
  response: PropTypes.any,
  message: PropTypes.string,
  currentMessage: PropTypes.object,
  userId: PropTypes.number,
  terminalId: PropTypes.number
}

const mapStateToProps = (state) => ({
  response: state.chatbot.response,
  message: state.chatbot.message,
  currentMessage: state.chatbot.currentMessage,
  userId: state.user.id,
  terminalId: state.terminal.id
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setResponse,
    sendMessage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(messageInput);

const styles = StyleSheet.create({
  
});
