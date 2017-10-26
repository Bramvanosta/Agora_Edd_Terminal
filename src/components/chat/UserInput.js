import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as TYPES from '../../config/messageTypes';

import { setResponse, sendMessage } from '../../actions/ChatbotActions';

import Progress from './Progress';
import OptionSelect from './OptionSelect';
import CameraModule from './CameraModule';

class messageInput extends Component {
  handleChange = (response, message) => {
    const formattedMessage = message ? message : response
    this.props.setResponse(response, formattedMessage);

    if (this.props.currentMessage.type === TYPES.SELECT || this.props.currentMessage.type === TYPES.PICTURE) {
      const { userId, terminalId, currentMessage } = this.props;
      this.props.sendMessage(userId, terminalId, currentMessage.key, response, formattedMessage);
    }
  }

  handlePress = () => {
    const { userId, terminalId, currentMessage, response, message } = this.props;

    if (response.length > 0 || response > 0) {
      this.props.sendMessage(userId, terminalId, currentMessage.key, response, message);
    }
  }

  renderInput = () => {
    const { currentMessage } = this.props;
    
    switch(currentMessage.type) {
      case TYPES.TEXT:
        return <TextInput onChangeText={(text) => this.handleChange(text)} />
      case TYPES.PROGRESS:
        return <Progress onChange={(response, message) => this.handleChange(response, message)} />;
      case TYPES.SELECT:
        return <OptionSelect options={currentMessage.options} onChange={(option, message) => this.handleChange(option, message)}></OptionSelect>
      case TYPES.PICTURE:
        return <CameraModule onChange={(picture) => this.handleChange(picture)}></CameraModule>
    }
  }
  
  render() {
    const { response, currentMessage } = this.props;
    const buttonIsVisible = currentMessage.type === TYPES.TEXT || currentMessage.type === TYPES.PROGRESS;

    return (
      <View>
        { this.renderInput() }
        { buttonIsVisible ?
          <Button
            onPress={this.handlePress}
            title="Envoyer"
            disabled={response.length === 0}
          />
          : null}
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
