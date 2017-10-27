import axios from 'axios';

import * as CONFIG from '../config/apiConfig';

export const REQUEST_CHAT = 'REQUEST_CHAT';
export const FETCHED_CHAT = 'FETCHED_CHAT';
export const REQUEST_ANSWER = 'REQUEST_ANSWER';
export const FETCHED_ANSWER = 'FETCHED_ANSWER';
export const SET_RESPONSE = 'SET_RESPONSE';
export const REQUEST_AUTOCOMPLETE = 'REQUEST_AUTOCOMPLETE';
export const FETCHED_AUTOCOMPLETE = 'FETCHED_AUTOCOMPLETE';
export const QUIT_SESSION = 'QUIT_SESSION';

export const startChat = () => (dispatch) => {
  dispatch({
    type: REQUEST_CHAT
  });

  setTimeout(() => {
    axios.post(`${CONFIG.baseUrl}/api/chatBot`)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        dispatch({
          type: FETCHED_CHAT,
          payload: data
        });
      });
  }, 2000);
}

export const sendMessage = (userId, terminalId, key, response, message) => (dispatch) => {
  dispatch({
    type: REQUEST_ANSWER,
    payload: { key, message }
  });

  const test = {
    user_id: userId,
    terminal_id: terminalId,
    question_id: key,
    response_data: response
  };

  console.log('sent data: ', test);

  setTimeout(() => {
    axios.post(`${CONFIG.baseUrl}/api/chatBot`, {
        user_id: userId,
        terminal_id: terminalId,
        question_id: key,
        response_data: response
      })
      .then(response => response.data)
      .then(data => {
        console.log(data);
        dispatch({
          type: FETCHED_ANSWER,
          payload: { ...data, message }
        })
      });
  }, 2000);
}

export const setResponse = (response, message) => (
  {
    type: SET_RESPONSE,
    payload: { response, message }
  }
)

export const fetchAutocomplete = (value, uri, searchTerm) => (dispatch) => {
  dispatch({
    type: REQUEST_AUTOCOMPLETE
  });

  axios.post(`${CONFIG.baseUrl}/${uri}`, {
    [searchTerm]: value
  })
  .then(response => response.data)
  .then(data => {
    console.log(data);
    dispatch({
      type: FETCHED_AUTOCOMPLETE,
      payload: data
    });
  });
}

export const quitSession = () => (
  {
    type: QUIT_SESSION
  }
);
