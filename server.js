const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const path = require('path')
import problems from './problems'

const app = express()

app.get('/', function (request,response) {
  response.
    sendFile(
      path.join(__dirname + '/src/index.html')
    )
})

let lastSolutionIndex = null
let lastProblemIndex = null
function randomProblemAndSolution() {

  const randomProblemIndex = Math.floor(Math.random() * problems.length)

  if (randomProblemIndex === lastProblemIndex) {
    return randomProblemAndSolution()
  }

  const problem = problems[randomProblemIndex]

  const randomSolutionIndex = Math.floor(Math.random() * problem.solutions.length)

  if (randomSolutionIndex === lastSolutionIndex) {
    return randomProblemAndSolution()
  }

  const solution = problem.solutions[randomSolutionIndex]

  lastSolutionIndex = randomSolutionIndex
  lastProblemIndex = randomProblemIndex

  return {
    problem: problem.problemData,
    solution,
  }
}

app.get('/sudoku', (request, response) => {
  response.json(randomProblemAndSolution())
})

const config = require('./webpack.config')
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(
    compiler,
    {
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      },
    }
  )
)

app.listen(
  3000,
  () => console.log('listening on 3000')
)
