import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchAutocomplete } from '../../actions/ChatbotActions';

class Search extends Component {
  handlePress = (id, name) => {
    this.props.onChange(id, name)
  }

  handleChange = (text) => {
    this.props.fetchAutocomplete(text, this.props.currentMessage.uri, this.props.currentMessage.searchTerm);
  }

  render() {
    const { autocompleteResults } = this.props;

    return (
      <View style={styles.searchContainer}>
        <View style={styles.optionsContainer}>
          { autocompleteResults.map((result) => (
            <TouchableOpacity key={result.id} onPress={() => this.handlePress(result.id, result.name)}>
              <Text>{ result.name }</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput style={styles.textInput} onChangeText={(text) => this.handleChange(text)} />
      </View>
    )
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentMessage: PropTypes.object,
  autocompleteResults: PropTypes.array
}

const mapStateToProps = (state) => ({
  currentMessage: state.chatbot.currentMessage,
  autocompleteResults: state.chatbot.autocompleteResults
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchAutocomplete
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1
  },

  optionsContainer: {
    flexDirection: 'row'
  },

  textInput: {
    height: 65,
    borderRadius: 35,
    padding: 20,
    backgroundColor: '#ffffff'
  },
});
