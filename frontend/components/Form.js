import React from 'react'
import { connect } from 'react-redux'
import { inputChange } from "../state/action-creators";

function Form({ form, inputChange }) {
  console.log(form);

  const changeHandler = (evt) => {
    inputChange([evt.target.name], evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
  };

  return (
    <form id="form" onSubmit={submitHandler}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={changeHandler}
        name="newQuestion"
        value={form.newQuestion.value}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={changeHandler}
        name="newTrueAnswer"
        value={form.newTrueAnswer.value}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={changeHandler}
        name="newFalseAnswer"
        value={form.newFalseAnswer.value}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return { form: state.form };
};

export default connect(mapStateToProps, { inputChange })(Form);

