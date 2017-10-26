import * as TYPES from '../config/messageTypes';
import * as AUTHORS from '../config/authorTypes';

const initialState = {
  messages: [
    {
      key: '1',
      author: AUTHORS.BOT,
      type: TYPES.TEXT,
      content: 'Salut, comment t\'appelles-tu ?'
    },
    {
      key: '2',
      author: AUTHORS.USER,
      type: TYPES.TEXT,
      content: 'Bram'
    },
    {
      key: '3',
      author: AUTHORS.BOT,
      type: TYPES.TEXT,
      content: 'Bienvenue, Bram.'
    },
    {
      key: '4',
      author: AUTHORS.BOT,
      type: TYPES.TEXT,
      content: 'Combien de temps prévois-tu de rester ici ?'
    }
  ]
}

export default function chatbotState(state = initialState, action) {
  return state;
}
