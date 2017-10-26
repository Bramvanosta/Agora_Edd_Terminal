import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from "react-native-slider";
import PropTypes from 'prop-types';

class Options extends Component {
  constructor() {
    super();

    this.state = {
      options: []
    }
  }

  handlePress = (option) => {
    let optionsClone = [...this.state.options];
    if (optionsClone.indexOf(option) === -1) {
      optionsClone.push(option);
    } else {
      optionsClone.splice(optionsClone.indexOf(option), 1);
    } 
    
    this.setState({ options: optionsClone });

    this.props.onChange(optionsClone, `${optionsClone.join(', ')}`)
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

Options.propTypes = {
  options: PropTypes.array
}

export default Options;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row'
  }
});
