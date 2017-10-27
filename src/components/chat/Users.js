import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchAutocomplete } from '../../actions/ChatbotActions';

class Users extends Component {
  
  handlePress = (id, name) => {
    this.props.onChange(id, name)
  }

  usersSkillsItem = (isMajor) => {
    var style = {
     background:'#b6b6b6',
     color:'#ffffff',
     padding:20,
     borderRadius:35
    };
    if(isMajor){
      style.background = '#00d4aa';
    }
    return style;
  }



  render() {
    const { users } = this.props;

    return (
      <View style={styles.usersContainer}>
        { users.map((user) => (
         <View key={user.id} style={styles.userCard}>
          <TouchableOpacity onPress={() => this.handlePress(user.option_id, user.username)}>
                <Text style={styles.userNameCard} >{ user.username }</Text>
              { user.skills.map((skill, index) => (
                  <Text>{ skill.name }</Text>  
              ))}
          </TouchableOpacity>
        </View>
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
  userNameCard:{
    color:"#0067e0",
    fontSize:20,
  },
  userCard:{
    // marginTop: -120,
    padding: 20,
    borderRadius:35,
    backgroundColor:"#ffffff",
    margin: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  

});
