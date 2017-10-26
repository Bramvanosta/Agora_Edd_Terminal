import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat')}
          title="Start"
        />
      </View>
    );
  }
}

Home.propTypes = {}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
});
