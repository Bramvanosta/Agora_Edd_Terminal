import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Messages from '../chat/Messages'

class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Messages></Messages>
      </View>
    );
  }
}

Chat.propTypes = {}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20
  }
});
