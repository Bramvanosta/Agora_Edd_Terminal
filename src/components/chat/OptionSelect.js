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
            <Text style={styles.optionItemText}>{ option.name }</Text>
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
    justifyContent: 'center',
    height:100
    
  },
  optionItem:{
    padding:20,
    backgroundColor:"#ffffff",
    margin:20,
    borderRadius:35,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 10,
    shadowOpacity: 0.1

  },
  optionItemText:{
    color:"#006ce2",
    fontWeight: "500"
  }

});
