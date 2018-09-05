import React, { Component } from "react";
import "./header.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container-info">
          <div className="Endgame">Let's play</div>
          <div className="Lets-Play">SUDOKU</div>
          <div className="sudoku-description">
            <p>
              Enter a value from 1-9 in any empty cell. Input values will appear
              blue on valid and red on invalid. To start a new problem, press
              the the LOAD NEW.
            </p>
            <p>
              Learn Sudoku{" "}
              <a href="https://www.conceptispuzzles.com/index.aspx?uri=puzzle/sudoku/rules">
                {" "}
                here!
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default header;
