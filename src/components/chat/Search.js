import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchAutocomplete } from '../../actions/ChatbotActions';

class OptionSelect extends Component {
  handlePress = (optionId, message) => {
    this.props.onChange(optionId, message)
  }

  handleChange = (text) => {
    this.props.fetchAutocomplete(text, this.props.currentMessage.uri, this.props.currentMessage.searchTerm);
  }

  render() {
    const { options } = this.props;

    return (
      <View style={styles.searchContainer}>
        <TextInput style={styles.textInput} onChangeText={(text) => this.handleChange(text)} />
      </View>
    )
  }
}

OptionSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentMessage: PropTypes.object
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchAutocomplete
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(OptionSelect);

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row'
  },

  textInput: {
    flex: 1,
    height: 65,
    borderRadius: 35,
    padding: 20,
    backgroundColor: '#ffffff'
  },
});
