import { sudokuVerifier } from '../src/sudoku_verifier';
import problems, { sudoku } from '../problems';

function assertValid(problem, solution) {
  expect(sudokuVerifier({ problem, solution })).toEqual({ status: 'valid', invalidIndexes: [] });
}

function assertIncomplete(problem, solution) {
  expect(sudokuVerifier({ problem, solution })).toEqual({ status: 'incomplete', invalidIndexes: [] });
}

function assertInvalid(problem, solution, expectedInvalidIndexes) {
  const verificationData = sudokuVerifier({ problem, solution });
  expect(verificationData.status).toEqual('invalid');
  function compare(a, b) {
    return a - b;
  }
  expect(verificationData.invalidIndexes.sort(compare)).toEqual(expectedInvalidIndexes.sort(compare));
}

describe('When called with the first sudoku problem', function() {
  describe('and a valid solution', function() {
    it('it should have a valid status and an empty invalidIndexes array', function() {
      assertValid(problems[0].problemData, problems[0].solutions[0]);
    });
  });
  describe('and a valid incomplete solution', function() {
    it('it should return a status of incomplete and an empty invalidIndexes array', function() {
      assertIncomplete(problems[0].problemData, problems[0].solutions[1]);
    });
  });
  describe('and an invalid complete solution', function() {
    it('it should return a status of invalid and an array with invalid cell indexes', function() {
      assertInvalid(problems[0].problemData, problems[0].solutions[2], [0, 7, 16, 64, 67, 72, 45, 27, 54, 19, 20, 29]);
    });
  });
  describe('and an invalid incomplete solution', function() {
    it('it should return a status of invalid and an array with invalid cell indexes', function() {
      assertInvalid(problems[0].problemData, problems[0].solutions[3], [29, 35, 38, 1, 64, 2]);
    });
  });
});

describe('When called with the second sudoku problem', function() {
  describe('and a valid solution', function() {
    it('it should have a valid status and an empty invalidIndexes array', function() {
      assertValid(problems[1].problemData, problems[1].solutions[0]);
    });
  });
  describe('and a valid incomplete solution', function() {
    it('it should return a status of incomplete and an empty invalidIndexes array', function() {
      assertIncomplete(problems[1].problemData, problems[1].solutions[1]);
    });
  });
  describe('and an invalid complete solution', function() {
    it('it should return a status of invalid and an array with invalid cell indexes', function() {
      assertInvalid(problems[1].problemData, problems[1].solutions[2], [
        19,
        20,
        21,
        22,
        40,
        48,
        60,
        65,
        69,
        18,
        68,
        43,
        61,
        62
      ]);
    });
  });
  describe('and an invalid incomplete solution', function() {
    it('it should return a status of invalid and an array with invalid cell indexes', function() {
      assertInvalid(problems[1].problemData, problems[1].solutions[3], [34]);
    });
  });
});
