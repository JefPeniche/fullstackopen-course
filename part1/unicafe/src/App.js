import { useState } from 'react'

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => (
  <table>
    <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + bad + neutral} />
      <StatisticLine text="average" value={(good - bad) / (good + bad + neutral)} />
      <StatisticLine text="positive" value={`${(good * 100) / (good + bad + neutral)} %`} />
    </tbody>
  </table>
)

const Button = ({ handleClick, children }) => <button onClick={handleClick}>{children}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)}>good</Button>
      <Button handleClick={() => setNeutral(neutral + 1)}>neutral</Button>
      <Button handleClick={() => setBad(bad + 1)}>bad</Button>
      <h1>statistics</h1>
      {good || neutral || bad ?
        <Statistics good={good} neutral={neutral} bad={bad} />
        :
        <p>No feedback given</p>}
    </div>
  )
}

export default App