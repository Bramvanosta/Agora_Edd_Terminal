import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import * as AUTHORS from '../../config/authorTypes';

import Bubble from './Bubble';

class Message extends Component {
  render() {
    const { message } = this.props;

    let children = null
    const styleMessage = message.author === AUTHORS.BOT ? styles.messageBot : styles.messageUser;
    const styleBubble = message.author === AUTHORS.BOT ? styles.bubbleBot : styles.bubbleUser;

    return (
      <View style={styleMessage}>
        { message.bubbles.map((bubble, index) => {
            const lastBubbleStyle = index === message.bubbles.length - 1 ? message.author === AUTHORS.BOT ? styles.lastBubbleBot : styles.lastBubbleUser : null;
            const betweenBubblesStyle = index > 0 ? styles.betweenBubbles : null;
          
            return (
              <View key={bubble.id} style={[styles.bubble, styleBubble, lastBubbleStyle, betweenBubblesStyle]}>
                <Bubble bubble={bubble} white={message.author === AUTHORS.USER}></Bubble>
              </View>
            );
          }) 
        }
      </View>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message;

const styles = StyleSheet.create({
  messageBot: {
    alignSelf: 'flex-start'
  },
  
  messageUser: {
    alignSelf: 'flex-end'
  },

  bubble: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 12,
    paddingVertical: 20,
    maxWidth: '50%',
    borderRadius: 35
  },

  lastBubbleBot: {
    borderBottomLeftRadius: 5
  },

  lastBubbleUser: {
    borderBottomRightRadius: 5
  },
  
  bubbleBot: {
    backgroundColor: '#ffffff',
  },
  
  bubbleUser: {
    backgroundColor: '#1374e3'
  }
});
