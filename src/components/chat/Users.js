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

  usersSkills = (isMajor) => {
    var style = {
    //  background:'#b6b6b6',
     color:'#ffffff',
     padding:20,
     borderRadius:35
    };
    if(isMajor){
      // style.background = '#00d4aa';
    }
    return style;
  }



  render() {
    const { users } = this.props;

    return (
      <View style={styles.usersContainer}>
        { users.map((user) => (
          <TouchableOpacity  key={user.id} onPress={() => this.handlePress(user.option_id, user.username)}>
            <Text style={styles.userNameCard} >{ user.username }</Text>
            { user.skills.map((skill) => (
              <Text style={this.usersSkills(skill.isSearched)}  key={skill.id}>{ skill.name }</Text>  
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
    flexDirection: 'row',
    flex:1,
    justifyContent: 'center',
  },
  userCard:{
    padding:20,
    backgroundColor:"#ffffff",
    margin:20,
    borderRadius:35,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  userNameCard:{
    color:"#0c73e3",
    fontWeight: "700"
  },

});
