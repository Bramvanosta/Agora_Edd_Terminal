import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Message from './messageTypes/Message';

class Messages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          renderItem={({item}) => <Message message={item}></Message>}
        />
      </View>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array
}

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    // flexDirection: 'column'
  },
});

const mapStateToProps = (state) => ({
  messages: state.chatbot.messages
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchLatestImages
// });

export default connect(mapStateToProps, null)(Messages);
