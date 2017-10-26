import { FETCHED_CHAT } from '../actions/ChatbotActions';

const initialState = {
  id: null,
}

export default function chatbotState(state = initialState, action) {
  switch(action.type) {
    case FETCHED_CHAT:
      return {
        ...state,
        id: action.payload.user.id
      };

    default:
      return state;
  }
}

const formatBubbles = (bubbles) => {
  return bubbles.map((bubble, index) => ({
    id: index,
    ...bubble
  }))
}
