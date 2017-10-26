import * as TYPES from '../config/messageTypes';
import * as AUTHORS from '../config/authorTypes';

import { 
  REQUEST_CHAT, 
  FETCHED_CHAT, 
  SET_RESPONSE,
  REQUEST_ANSWER,
  FETCHED_ANSWER
} from '../actions/ChatbotActions';

const initialState = {
  loading: false,
  response: '',
  message: '',
  currentQuestion: null,
  messages: []
}

export default function chatbotState(state = initialState, action) {
  switch(action.type) {
    case REQUEST_CHAT:
      return {
        ...state,
        loading: true,
        messages: []
      };

    case FETCHED_CHAT:
      return {
        ...state,
        loading: false,
        currentMessage: formatMessage(action.payload),
        messages: [
          ...state.messages,
          formatMessage(action.payload)
        ]
      };

    case SET_RESPONSE:
      return {
        ...state,
        response: action.payload.response,
        message: action.payload.message
      };

    case REQUEST_ANSWER:
      return {
        ...state,
        loading: true,
        messages: [
          ...state.messages,
          {
            key: `${action.payload.key}-response`,
            type: TYPES.TEXT,
            author: AUTHORS.USER,
            bubbles: [
              {
                id: 1,
                content: action.payload.message
              }
            ]
          }
        ]
      }

    case FETCHED_ANSWER:
      return {
        ...state,
        loading: false,
        response: '',
        message: '',
        currentMessage: formatMessage(action.payload),
        messages: [
          ...state.messages,
          formatMessage(action.payload)
        ]
      }

    default:
      return state;
  }
}

const formatMessage = (message) => ({
  key: message.key,
  type: message.type,
  author: AUTHORS.BOT,
  bubbles: formatBubbles(message.bubbles)
})

const formatBubbles = (bubbles) => {
  return bubbles.map((bubble, index) => ({
    id: index,
    ...bubble
  }))
}
