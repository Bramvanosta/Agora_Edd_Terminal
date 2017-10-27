import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { Bubbles } from 'react-native-loader';

import * as AUTHORS from '../../config/authorTypes';
import * as TYPES from '../../config/messageTypes'

import Bubble from './Bubble';

class Message extends Component {
  render() {
    const { message } = this.props;

    let children = null
    const styleMessage = message.author === AUTHORS.BOT ? styles.messageBot : styles.messageUser;
    const styleBubble = message.author === AUTHORS.BOT ? styles.bubbleBot : styles.bubbleUser;

    return (
      <View style={styleMessage}>
        { message.author === AUTHORS.BOT ?
          <Image style={styles.image} source={require('../../assets/img/avatar.png')}></Image>
          : null }
        <View style={styles.bubbleContainer}>
          { message.type === TYPES.LOADING ?
            <Animatable.View animation="zoomIn" duration={500} style={[styles.bubble, styleBubble, styles.lastBubbleBot]}>
              <Bubbles size={8} color="#e1e1e1"></Bubbles>
            </Animatable.View>
            : message.bubbles.map((bubble, index) => {
              const lastBubbleStyle = index === message.bubbles.length - 1 ? message.author === AUTHORS.BOT ? styles.lastBubbleBot : styles.lastBubbleUser : null;
              const betweenBubblesStyle = index > 0 ? styles.betweenBubbles : null;

              return (
                <Animatable.View animation="zoomIn" duration={500} key={bubble.id} style={[styles.bubble, styleBubble, lastBubbleStyle, betweenBubblesStyle]}>
                  <Bubble bubble={bubble} white={message.author === AUTHORS.USER}></Bubble>
                </Animatable.View>
              );
            }) 
          }
        </View>
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
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  
  messageUser: {
    alignSelf: 'flex-end'
  },

  avatarContainer: {
    flexDirection: 'row',
    marginRight: 24
  },

  bubbleContainer: {
    maxWidth: '75%'
  },

  bubble: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 35
  },

  image: {
    alignSelf: 'flex-end',
    width: 85,
    height: 85
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
