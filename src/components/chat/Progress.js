import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from "react-native-slider";
import PropTypes from 'prop-types';

class Progress extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    }
  }

  handleChange = (value) => {
    this.setState({ value });
    
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    this.props.onChange(value, `${hours}h${minutes}`)
  }

  render() {
    const { min, max, step } = this.props;
    const { value } = this.state;

    return (
      <View>
        <Text>{value}</Text>
        <Slider
          value={value}
          onValueChange={value => this.handleChange(value)}
          step={step}
          minimumValue={min}
          maximumValue={max}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
        />
      </View>
    )
  }
}

Progress.defaultProps = {
  min: 0,
  max: 600,
  step: 1
}

Progress.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default Progress;

const styles = StyleSheet.create({
  track: {
    height: 1,
    backgroundColor: '#303030',
  },

  thumb: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(150, 150, 150, 0.3)',
    borderColor: 'rgba(150, 150, 150, 0.6)',
    borderWidth: 14,
    borderRadius: 15,
  }
});
