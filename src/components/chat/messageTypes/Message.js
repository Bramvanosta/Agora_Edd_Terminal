import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import * as TYPES from '../../../config/messageTypes';
import * as AUTHORS from '../../../config/authorTypes';

import TextMessage from './TextMessage';

class Message extends Component {
  render() {
    const { message } = this.props;

    let children = null
    const style = message.author === AUTHORS.BOT ? styles.messageBot : styles.messageUser;

    console.log(message);

    switch(message.type) {
      case TYPES.TEXT:
      children = <TextMessage message={message}></TextMessage>;
      break;
      default:
      children = null;
    }

    return (
      // <View style={styles.messageContainer}>
        <View style={[styles.message, style]}>
          { children }
        </View>
      // </View>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    // flexDirection: 'row'
  },

  message: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  messageBot: {
    backgroundColor: '#90A4AE'
  },

  messageUser: {
    backgroundColor: '#00E676',
    justifyContent: 'flex-end'
  }
});
