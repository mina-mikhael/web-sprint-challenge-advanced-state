import React from 'react'
import { connect } from 'react-redux'
import { inputChange, resetForm, postQuiz, resetMessage } from "../state/action-creators";

function Form({ form, inputChange, resetForm, postQuiz, resetMessage }) {
  const changeHandler = (evt) => {
    inputChange(evt.target);
    resetMessage();
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    postQuiz(form);
    resetForm();
  };

  return (
    <form id="form" onSubmit={submitHandler}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={changeHandler}
        name="newQuestion"
        value={form.newQuestion}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={changeHandler}
        name="newTrueAnswer"
        value={form.newTrueAnswer}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={changeHandler}
        name="newFalseAnswer"
        value={form.newFalseAnswer}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        id="submitNewQuizBtn"
        disabled={
          form.newQuestion.trim() && form.newTrueAnswer.trim() && form.newFalseAnswer.trim()
            ? false
            : true
        }>
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return { form: state.form };
};

export default connect(mapStateToProps, {
  inputChange,
  resetForm,
  postQuiz,
  resetMessage,
})(Form);

