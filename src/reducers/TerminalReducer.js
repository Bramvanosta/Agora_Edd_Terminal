import * as TYPES from '../config/messageTypes';
import { FETCHED_CHAT } from '../actions/ChatbotActions';

const initialState = {
  id: null
}

export default function terminalState(state = initialState, action) {
  switch(action.type) {
    case FETCHED_CHAT:
      return {
        ...state,
        id: action.payload.terminal.id
      }

    default:
      return state;
  }
}
