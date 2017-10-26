import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Bubble extends Component {
  render() {
    const { bubble } = this.props;

    return (
      <View>
        <Text>{ bubble.content }</Text>
      </View>
    )
  }
}

Bubble.propTypes = {
  bubble: PropTypes.object.isRequired
}

export default Bubble;

const styles = StyleSheet.create({
});
