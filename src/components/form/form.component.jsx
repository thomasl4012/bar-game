import React from "react";
import "./form.style.css";

export const Form = ({ handleChange, handleSubmit, gameState, value }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col m-2">
            <input
              className="form-control"
              onChange={handleChange}
              value={value}
              type="text"
            ></input>
          </div>
          <div className="col m-2">
            {gameState ? (
              <button className="btn btn-primary" type="submit">
                check
              </button>
            ) : (
              <p>you loose </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
