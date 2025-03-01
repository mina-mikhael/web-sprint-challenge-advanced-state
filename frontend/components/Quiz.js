import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer, postAnswer, resetMessage } from "../state/action-creators";

function Quiz({ quiz, selectedAnswer, fetchQuiz, selectAnswer, postAnswer, resetMessage }) {
  const [answerID, setAnswerID] = useState("");
  // console.log(quiz);
  useEffect(() => {
    !quiz && fetchQuiz();
  }, []);

  const answerClickHandler = (answer_id, quiz_id) => {
    // console.log(answer_id, quiz_id);
    setAnswerID(answer_id);
    selectAnswer(answer_id, quiz_id);
    resetMessage();
  };

  const submitClickHandler = () => {
    postAnswer(selectedAnswer);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${quiz.answers[0].answer_id === answerID ? "selected" : ""}`}>
                {quiz.answers[0].text}
                <button onClick={() => answerClickHandler(quiz.answers[0].answer_id, quiz.quiz_id)}>
                  {quiz.answers[0].answer_id === answerID ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={`answer ${quiz.answers[1].answer_id === answerID ? "selected" : ""}`}>
                {quiz.answers[1].text}
                <button
                  onClick={() => answerClickHandler(quiz.answers[1].answer_id, quiz.quiz_id)}
                  className={quiz.answers[1].answer_id === answerID ? "selected" : ""}>
                  {quiz.answers[1].answer_id === answerID ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button
              id="submitAnswerBtn"
              disabled={
                quiz.answers[0].answer_id === answerID || quiz.answers[1].answer_id === answerID
                  ? false
                  : true
              }
              onClick={() => submitClickHandler()}>
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return { quiz: state.quiz, selectedAnswer: state.selectedAnswer };
};

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer, resetMessage })(
  Quiz
);
