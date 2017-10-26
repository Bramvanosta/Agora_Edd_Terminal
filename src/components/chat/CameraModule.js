import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Camera from 'react-native-camera';

class CameraModule extends Component {
  handlePress = () => {
    this.props.onChange('picture', 'Voici ma photo');
  }

  takePicture = () => {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View>
        <Camera
          ref={cam => { this.camera = cam }}
          style={styles.preview}
          aspect="fit">
          <Text style={styles.capture} onPress={this.takePicture}>[CAPTURE]</Text>
        </Camera>
        <Button 
          onPress={this.handlePress}
          title="Prendre une photo" />
      </View>
    )
  }
}

CameraModule.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default CameraModule;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
