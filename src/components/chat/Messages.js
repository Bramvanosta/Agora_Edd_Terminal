import React, { Component } from 'react';
import { View, FlatList, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { startChat } from '../../actions/ChatbotActions';

import Message from './Message';
import UserInput from './UserInput';

class Messages extends Component { 
  componentWillMount() {
    this.props.startChat();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.messages.length !== nextProps.messages.length) {
      setTimeout(() => {
        this.messagesList.scrollToEnd();
      }, 300);
    }
  }

  render() {
    const { messages } = this.props;

    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={150} style={styles.chatContainer}>
        <View style={styles.messagesContainer}>
          <FlatList
            ref={(ref) => this.messagesList = ref}
            data={messages}
            renderItem={({item}) => <Message message={item}></Message>}
          />
        </View>
        <View style={styles.inputContainer}>
          { messages.length > 0 ?
            <UserInput />
            : null }
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  startChat: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },

  messagesContainer: {
    flex: 1,
  },

  inputContainer: {
    paddingTop: 20
  }
});

const mapStateToProps = (state) => ({
  messages: state.chatbot.messages
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    startChat
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
