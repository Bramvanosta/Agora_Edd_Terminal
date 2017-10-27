import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchAutocomplete } from '../../actions/ChatbotActions';

class Users extends Component {
  handlePress = (id, name) => {
    this.props.onChange(id, name)
  }

  render() {
    const { users } = this.props;

    return (
      <View style={styles.usersContainer}>
        { users.map((user) => (
          <TouchableOpacity key={user.id} onPress={() => this.handlePress(user.option_id, user.username)}>
            <Text>{ user.username }</Text>
            { user.skills.map((skill) => (
              <Text key={skill.id}>{ skill.name }</Text>  
            ))}
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

Users.propTypes = {
  onChange: PropTypes.func.isRequired,
  users: PropTypes.array
}

export default Users;

const styles = StyleSheet.create({
  usersContainer: {
    flex: 1
  },
});
