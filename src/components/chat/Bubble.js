import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Bubble extends Component {
  render() {
    const { bubble, white } = this.props;

    return (
      <View>
        <Text style={white ? styles.whiteText : null}>{ bubble.content }</Text>
      </View>
    )
  }
}

Bubble.propTypes = {
  bubble: PropTypes.object.isRequired,
  white: PropTypes.bool.isRequired
}

export default Bubble;

const styles = StyleSheet.create({
  whiteText: {
    color: '#ffffff'
  }
});
