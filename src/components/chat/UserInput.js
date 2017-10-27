import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as TYPES from '../../config/messageTypes';

import { setResponse, sendMessage } from '../../actions/ChatbotActions';

import Progress from './Progress';
import OptionSelect from './OptionSelect';
import CameraModule from './CameraModule';
import Search from './Search';
import Users from './Users';

class messageInput extends Component {
  handleChange = (response, message) => {
    const formattedMessage = message ? message : response
    this.props.setResponse(response, formattedMessage);

    if (this.props.currentMessage.type === TYPES.SELECT ||
        this.props.currentMessage.type === TYPES.PICTURE || 
        this.props.currentMessage.type === TYPES.SEARCH ||
        this.props.currentMessage.type === TYPES.USER) {
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
        return <TextInput style={styles.textInput} placeholder="Placeholder" onChangeText={(text) => this.handleChange(text)} />
      case TYPES.PROGRESS:
        return <Progress step={30} onChange={(response, message) => this.handleChange(response, message)} />;
      case TYPES.SELECT:
        return <OptionSelect options={currentMessage.options} onChange={(option, message) => this.handleChange(option, message)}></OptionSelect>
      case TYPES.PICTURE:
        return <CameraModule onChange={(picture) => this.handleChange(picture)}></CameraModule>
      case TYPES.SEARCH:
        return <Search onChange={(options, message) => this.handleChange(options, message)}></Search>
      case TYPES.USER:
        return <Users users={currentMessage.options} onChange={(options, message) => this.handleChange(options, message)}></Users>
    }
  }
  
  render() {
    const { response, currentMessage, loading } = this.props;
    const buttonIsVisible = (currentMessage.type === TYPES.TEXT || currentMessage.type === TYPES.PROGRESS) && !loading;
    const inputIsVisible = !loading;

    return (
      <View style={styles.inputContainer}>
        { inputIsVisible ?
          this.renderInput()
          : null }
        { buttonIsVisible ?
          <TouchableOpacity
            style={styles.validButton}
            onPress={this.handlePress}>
            <Icon style={styles.validButtonIcon} name="send" size={30} color={response.length > 0 || response > 0 ? '#1374e3' : '#b7b7b7'} />
          </TouchableOpacity>
          : null}
      </View>
    )
  }
}

messageInput.propTypes = {
  response: PropTypes.any,
  message: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  currentMessage: PropTypes.object,
  userId: PropTypes.number,
  terminalId: PropTypes.number
}

const mapStateToProps = (state) => ({
  response: state.chatbot.response,
  message: state.chatbot.message,
  loading: state.chatbot.loading,
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textInput: {
    flex: 1,
    height: 65,
    borderRadius: 35,
    padding: 20,
    backgroundColor: '#ffffff'
  },

  validButton: {
    justifyContent: 'center',
    height: 65,
    marginLeft: 20,
    backgroundColor: '#ffffff',
    borderRadius: 35
  },

  validButtonIcon: {
    marginLeft: 45,
    marginRight: 45
  }
});
