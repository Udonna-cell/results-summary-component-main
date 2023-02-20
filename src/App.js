import React from 'react'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import './App.css'

const data = `[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]`


class App extends React.Component {
  render(){
    return (<div className="container">
      <Header />
      <Main data={JSON.parse(data)} />
    </div>)
  }
}

export default App