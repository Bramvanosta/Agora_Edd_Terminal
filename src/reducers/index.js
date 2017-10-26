import { combineReducers } from 'redux';

import navState from './NavigatorReducer';
import chatbotState from './ChatbotReducer';
import terminalState from './TerminalReducer';
import userState from './UserReducer';

const state = combineReducers({
  nav: navState,
  chatbot: chatbotState,
  terminal: terminalState,
  user: userState
});

export default state;
