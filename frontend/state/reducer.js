// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {
  MOVE_COUNTERCLOCKWISE,
  MOVE_CLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_QUIZ_START_FETCHING,
  SET_SELECTED_ANSWER,
  RESET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  RESET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      if (state < 5) {
        return state + 1;
      } else return (state = initialWheelState);
    case MOVE_COUNTERCLOCKWISE:
      if (state > 0) {
        return state - 1;
      } else return (state = 5);
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_START_FETCHING:
      return (state = initialQuizState);
    case SET_QUIZ_INTO_STATE:
      return (state = action.payload);
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case RESET_SELECTED_ANSWER:
      return (state = initialSelectedAnswerState);
    case SET_SELECTED_ANSWER:
      return (state = { answer_id: action.payload.answer_id, quiz_id: action.payload.quiz_id });
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return (state = action.payload);
    case RESET_INFO_MESSAGE:
      return (state = initialMessageState);
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
