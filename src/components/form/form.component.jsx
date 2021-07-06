import React from "react";
import "./form.style.css";

export const Form = ({ handleClick, gameState, number, value, roman }) => {
  return (
    <div>
      <div className="form-row">
        <div className="col m-2"></div>
        <div className="col m-2">
          {gameState ? (
            <div>
              <button className="btn btn-primary m-2" onClick={handleClick}>
                I
              </button>
              <button className="btn btn-primary m-2" onClick={handleClick}>
                V
              </button>
              <button className="btn btn-primary m-2" onClick={handleClick}>
                X
              </button>
              <button className="btn btn-primary m-2" onClick={handleClick}>
                L
              </button>
              <button className="btn btn-primary m-2" onClick={handleClick}>
                C
              </button>
              <button className="btn btn-primary m-2" onClick={handleClick}>
                M
              </button>
            </div>
          ) : (
            <div className="loose">
              <p style={{ margin: "6px" }}>
                you loose at number : <b>{number}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
