import React, { Component } from "react";
import "./header.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container-info">
          <div className="Endgame">ENDGAME.</div>
          <div className="Lets-Play">Let's play.</div>
          <div className="Sudoku">SUDOKU</div>
          <div className="sudoku-description">
            <p>
              Hello Applicant! Please implement this sudoku visualizer design.
              Clicking ‘LOAD NEW’ should fetch another sudoku problem from the
              server and visualize it.
            </p>
            <p>
              When visualizing the sudoku problem and solution, represent
              user-entered cells with blue text. Represent problem-provided
              cells with bold gray text. Represent user-entered invalid cells
              with red text.
            </p>
            <p>
              Please also include this message in your sudoku visualizer. Please
              also include this message in your sudoku visualizer.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default header;
