import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Bubble extends Component {
  render() {
    const { bubble, white } = this.props;

    return (
      <View>
        { bubble.content.length > 0 ?
          <Text style={[styles.text, white ? styles.whiteText : null]}>{ bubble.content }</Text>
          : bubble.url_avatar ? 
            <Image style={styles.image} source={{uri: bubble.url_avatar}} />
            : null }
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
  text: {
    fontSize: 18,
    lineHeight: 25,
    color: '#4a4a4a'
  },

  image: {
    width: 180,
    height: 180
  },

  whiteText: {
    color: '#ffffff'
  }
});
