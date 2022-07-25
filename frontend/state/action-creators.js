// ❗ You don't need to add extra action creators to achieve MVP
/////////--- imports: 
import axios from "axios";
import * as actionTypes from "./action-types";
const {
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
} = actionTypes;

/////////---ACTION CREATORS
export function moveClockwise() {
  return { type: MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE };
}

export function selectAnswer(answer_id, quiz_id) {
  return { type: SET_SELECTED_ANSWER, payload: { answer_id, quiz_id } };
}

export function setMessage(messageData) {
  return { type: SET_INFO_MESSAGE, payload: messageData };
}

export function resetMessage() {
  return { type: RESET_INFO_MESSAGE };
}

export function setQuiz(data) {
  return { type: SET_QUIZ_INTO_STATE, payload: data };
}

export function inputChange() {}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch({ type: SET_QUIZ_START_FETCHING });
    axios
      .get("http://localhost:9000/api/quiz/next")
      .then((res) => {
        dispatch(setQuiz(res.data));
      })
      .catch((err) => {
        dispatch(setMessage(err.message));
      });

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer(answerData) {
  console.log("answerData", answerData);
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios
      .post("http://localhost:9000/api/quiz/answer", answerData)
      .then((res) => dispatch(setMessage(res.data.message)))
      .catch((err) => dispatch(setMessage(err.message)));
    dispatch({ type: RESET_SELECTED_ANSWER });
    dispatch(fetchQuiz());
  };
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
