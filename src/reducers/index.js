import { combineReducers } from 'redux';

import navState from './NavigatorReducer';
import chatbotState from './ChatbotReducer';

const state = combineReducers({
  nav: navState,
  chatbot: chatbotState
});

export default state;
