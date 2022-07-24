import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

const wheelArr = [0, 1, 2, 3, 4, 5];
const Wheel = ({ wheel, moveClockwise, moveCounterClockwise }) => {
  const handleCwise = () => {
    moveClockwise();
  };

  const handleCounterCkWise = () => {
    moveCounterClockwise();
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        {wheelArr &&
          wheelArr.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`cog ${item === wheel ? "active" : ""}`}
                style={{ "--i": idx }}>
                {item === wheel ? "B" : ""}
              </div>
            );
          })}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterCkWise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={handleCwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { wheel: state.wheel };
};

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);
