import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from "react-native-slider";
import PropTypes from 'prop-types';

class OptionSelect extends Component {
  handlePress = (optionId, message) => {
    this.props.onChange(optionId, message)
  }

  render() {
    const { options } = this.props;

    return (
      <View style={styles.optionsContainer}>
        { options.map((option) => (
          <TouchableOpacity key={option.option_id} onPress={() => this.handlePress(option.option_id, option.name)} style={styles.optionItem} >
            <Text>{ option.name }</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

OptionSelect.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

export default OptionSelect;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-between',
    
  },
  optionItem:{
    color:"#006ce2",
    padding:20,
    fontWeight: "500"
  }

});
