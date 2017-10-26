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
            const fistBubbleStyle = index === 0 ? styles.firstBubble : null;
            const lastBubbleStyle = index === message.bubbles.length - 1 ? styles.lastBubble : null;
            const betweenBubblesStyle = index > 0 ? styles.betweenBubbles : null;
          
            return (
              <View key={bubble.id} style={[styles.bubble, styleBubble, fistBubbleStyle, lastBubbleStyle, betweenBubblesStyle]}>
                <Bubble bubble={bubble}></Bubble>
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
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '50%'
  },
  
  firstBubble: {
    marginTop: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },

  lastBubble: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  betweenBubbles: {
    marginTop: 4
  },
  
  bubbleBot: {
    backgroundColor: '#90A4AE',
  },
  
  bubbleUser: {
    backgroundColor: '#00E676',
  }
});
