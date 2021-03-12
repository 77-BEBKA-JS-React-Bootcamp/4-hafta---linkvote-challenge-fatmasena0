import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import LinksCard from './components/LinksCard/LinksCard'
import NewLink from './components/NewLink/NewLink'

const links = []

function App () {
  const [listLinks, setListLinks] = useState([])

  return (
    <div className='App'>
      <ul className='nav'>
        <li>homework.com</li>
        <li className='right'><b>Link</b>VOTE Challenge</li>
      </ul>
      <Router>
        <Switch>
          <Route path='/newlink'>
            <NewLink
              setListLinks={setListLinks}
              listLinks={listLinks}
            />
          </Route>
          <Route exact path='/'>
            <LinksCard
              setListLinks={setListLinks}
              listLinks={listLinks}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
