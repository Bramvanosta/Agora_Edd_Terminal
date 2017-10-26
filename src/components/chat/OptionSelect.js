import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from "react-native-slider";
import PropTypes from 'prop-types';

class OptionSelect extends Component {
  handlePress = (option) => {
    this.props.onChange(option)
  }

  render() {
    const { options } = this.props;

    return (
      <View style={styles.optionsContainer}>
        { options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => this.handlePress(option)}>
            <Text>{ option }</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

OptionSelect.propTypes = {
  options: PropTypes.array
}

export default OptionSelect;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row'
  }
});
