import React, { Component } from "react";
import axios from "axios";
import "./game.css";
import { sudokuVerifier } from "../../sudoku_verifier";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      problem: [],
      solution: [],
      invalidIndexes: [],
      isComplete: ""
    };
  }

  componentWillMount = () => {
    axios.get("/sudoku").then(response => {
      this.setState({
        problem: response.data.problem,
        solution: response.data.problem,
        invalidIndexes: sudokuVerifier({
          problem: response.data.problem,
          solution: response.data.problem
        }).invalidIndexes,
        isComplete: sudokuVerifier({
          problem: response.data.problem,
          solution: response.data.problem
        }).status
      });
    });
  };

  loadNew = () => {
    axios.get("/sudoku").then(response => {
      this.setState({
        problem: response.data.problem,
        solution: response.data.problem,
        invalidIndexes: sudokuVerifier({
          problem: response.data.problem,
          solution: response.data.problem
        }).invalidIndexes,
        isComplete: sudokuVerifier({
          problem: response.data.problem,
          solution: response.data.problem
        }).status
      });
    });
  };

  onChange = event => {
    let solution = this.state.solution.slice();
    if (event.target.value === "" || isNaN(event.target.value)) {
      solution[
        Number(event.target.name[0] * 9) + Number(event.target.name[1])
      ] = null;
      this.setState({
        solution,
        invalidIndexes: sudokuVerifier({
          problem: this.state.problem,
          solution
        }).invalidIndexes,
        isComplete: sudokuVerifier({
          problem: this.state.problem,
          solution
        }).status
      });
    } else {
      solution[
        Number(event.target.name[0] * 9) + Number(event.target.name[1])
      ] = event.target.value;
      sudokuVerifier({ problem: this.state.problem, solution });
      this.setState({
        solution,
        invalidIndexes: sudokuVerifier({
          problem: this.state.problem,
          solution
        }).invalidIndexes,
        isComplete: sudokuVerifier({
          problem: this.state.problem,
          solution
        }).status
      });
    }
  };

  render() {
    if (this.state.isComplete === "valid") {
      let rows = [];
      let elements = [];
      for (let i = 0; i < this.state.solution.length; i++) {
        if (i % 9 === 0 && i !== 0) {
          rows.push(elements);
          elements = [];
        }

        if (i === 80) {
          rows.push(elements);
        }
        elements.push({
          id: `${Math.floor(i / 9)}${i % 9}`,
          value: this.state.solution[i],
          status: "valid"
        });
      }

      for (let i = 0; i < this.state.invalidIndexes.length; i++) {
        rows[Math.floor(this.state.invalidIndexes[i] / 9)][
          this.state.invalidIndexes[i] % 9
        ].status = "invalid";
      }

      for (let i = 0; i < this.state.problem.length; i++) {
        if (this.state.problem[i] !== null) {
          rows[Math.floor(i / 9)][i % 9].status = "given";
        }
      }
      alert("Nice you solved the Puzzle!");
      return (
        <div className="board">
          <div className="button-container">
            <button className="new" onClick={this.loadNew}>
              LOAD NEW
            </button>
            <div className="alert alert-success" role="alert">
              You've solved the Sudoku Puzzle!
            </div>
          </div>
          <table className="sudoku-table">
            <tbody>
              {rows.map((row, rindex) => {
                return (
                  <tr key={rindex}>
                    {row.map(element => {
                      let input = (
                        <input type="text" size="number" maxLength="1" />
                      );
                      if (element.status === "given") {
                        input = (
                          <input
                            readOnly
                            name={element.id}
                            type="text"
                            size="number"
                            maxLength="1"
                            value={element.value}
                            style={{ color: "#bcbcbc" }}
                          />
                        );
                      } else if (element.status === "invalid") {
                        input = (
                          <input
                            name={element.id}
                            type="text"
                            size="number"
                            maxLength="1"
                            value={element.value ? element.value : ""}
                            onChange={this.onChange}
                            style={{ color: "#D94347" }}
                          />
                        );
                      } else {
                        input = (
                          <input
                            name={element.id}
                            type="text"
                            size="number"
                            maxLength="1"
                            value={element.value ? element.value : ""}
                            onChange={this.onChange}
                          />
                        );
                      }
                      return <td key={element.id}>{input}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      let rows = [];
      let elements = [];
      for (let i = 0; i < this.state.solution.length; i++) {
        if (i % 9 === 0 && i !== 0) {
          rows.push(elements);
          elements = [];
        }

        if (i === 80) {
          rows.push(elements);
        }
        elements.push({
          id: `${Math.floor(i / 9)}${i % 9}`,
          value: this.state.solution[i],
          status: "valid"
        });
      }

      for (let i = 0; i < this.state.invalidIndexes.length; i++) {
        rows[Math.floor(this.state.invalidIndexes[i] / 9)][
          this.state.invalidIndexes[i] % 9
        ].status = "invalid";
      }

      for (let i = 0; i < this.state.problem.length; i++) {
        if (this.state.problem[i] !== null) {
          rows[Math.floor(i / 9)][i % 9].status = "given";
        }
      }
      return (
        <div className="board">
          <div className="button-container">
            <button className="new" onClick={this.loadNew}>
              LOAD NEW
            </button>
          </div>
          <table className="sudoku-table">
            <tbody>
              {rows.map((row, rindex) => {
                return (
                  <tr key={rindex}>
                    {row.map(element => {
                      let input = (
                        <input type="text" size="number" maxLength="1" />
                      );
                      if (element.status === "given") {
                        input = (
                          <input
                            readOnly
                            name={element.id}
                            type="text"
                            size="number"
                            maxLength="1"
                            value={element.value}
                            style={{ color: "#bcbcbc" }}
                          />
                        );
                      } else if (element.status === "invalid") {
                        input = (
                          <input
                            name={element.id}
                            type="text"
                            size="number"
                            maxLength="1"
                            value={element.value ? element.value : ""}
                            onChange={this.onChange}
                            style={{ color: "#D94347" }}
                          />
                        );
                      } else {
                        input = (
                          <input
                            name={element.id}
                            type="text"
                            size="number"
                            maxLength="1"
                            value={element.value ? element.value : ""}
                            onChange={this.onChange}
                          />
                        );
                      }
                      return <td key={element.id}>{input}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Game;
