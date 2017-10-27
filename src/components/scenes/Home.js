import React, { Component } from 'react';
import { TouchableOpacity, StatusBar, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
        <StatusBar
          barStyle="dark-content"
        />
        <Image style={styles.image} source={require('../../assets/img/home.jpg')} />
      </TouchableOpacity>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Home;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  }
});
