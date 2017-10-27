import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { quitSession } from '../../actions/ChatbotActions';

import Messages from '../chat/Messages';

class Chat extends Component {
  handlePress = () => {
    this.props.quitSession();
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.header}>
          <View style={styles.emptySpace}></View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Edd</Text>
          </View>
          <View style={styles.emptySpace}></View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.handlePress()}>
              <Icon name="close" size={30} color={'#ffffff'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Messages></Messages>
        </View>
      </View>
    );
  }
}

Chat.propTypes = {
  navigation: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    quitSession
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Chat);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#1364e3'
  },

  emptySpace: {
    flex: 1,
  },

  titleContainer: {
    alignSelf: 'center',
    marginRight: -30
  },

  title: {
    color: '#ffffff',
    fontSize: 18
  },

  container: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 40,
    paddingRight: 40
  }
});
