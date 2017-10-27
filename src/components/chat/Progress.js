import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from "react-native-slider";
import PropTypes from 'prop-types';

class Progress extends Component {
  constructor() {
    super();

    this.state = {
      value: 60
    }
  }

  handleChange = (value) => {
    this.setState({ value });
    
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    this.props.onChange(value, `${hours} heures ${minutes > 0 ? 'et ' + minutes + ' minutes' : null}`)
  }

  render() {
    const { min, max, step } = this.props;
    const { value } = this.state;

    const minHours = Math.floor(min / 60);
    const minMinutes = min % 60;
    const maxHours = Math.floor(max / 60);
    const maxMinutes = max % 60;
    
    return (
      <View style={styles.progressContainer}>
        {/* <View style={styles.textContainer}>
          <Text style={styles.label}>{ minHours > 0 ? `${minHours}h` : null }{ minMinutes > 0 ? `${minMinutes}min` : null}</Text>
          <Text style={styles.label}>{ maxHours > 0 ? `${maxHours}h` : null }{ maxMinutes > 0 ? `${maxMinutes}min` : null}</Text>
        </View> */}
        {/* <View style={styles.sliderContainer}> */}
          <Slider
            style={styles.slider}
            value={value}
            onValueChange={value => this.handleChange(value)}
            step={step}
            minimumValue={min}
            maximumValue={max}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor="#ff4d64"
          />
        {/* </View> */}
      </View>
    )
  }
}

Progress.defaultProps = {
  min: 30,
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
  progressContainer: {
    flex: 1
  },

  slider: {
    height: 65
  },

  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  label: {
    fontSize: 18,
    color: '#9b9b9b'
  },

  track: {
    height: 65,
    borderRadius: 35,
    backgroundColor: '#ffffff'
  },

  thumb: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: '#1374e3',
  }
});
