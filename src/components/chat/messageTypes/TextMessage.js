import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class TextMessage extends Component {
  render() {
    const { message } = this.props;

    return (
      <View>
        <Text>{ message.content }</Text>
      </View>
    )
  }
}

TextMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export default TextMessage;

const styles = StyleSheet.create({
  
});
