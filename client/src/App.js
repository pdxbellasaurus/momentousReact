import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SingleEvent from './pages/SingleEvent';
import CreateEvent from './pages/CreateEvent';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'bulma/css/bulma.css';
import GlobalContext from './utils/GlobalState';
import ProtectedRoute from './components/ProtectedRoute';

import HomeStyle from './components/HomeStyle';
import { ThemeProvider } from 'styled-components'
import theme from './theme'


const App = ( (props) => {  

  const [state, setState] = useState({
    loggedIn: false,
    username: "",
    id: "",
    onUpdate: (userData) => {

      setState({ ...state, ...userData });
    }
  })

  return (

  

  <ThemeProvider theme={theme}>{

    <HomeStyle color ="gray" bg="blue">


    <GlobalContext.Provider value={state}>
    <Router>

        <Nav />
        <div className="container is-fluid">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events/:id" component={SingleEvent} />
          <ProtectedRoute exact path="/new" component={CreateEvent} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
        </div>
    </Router>
    </GlobalContext.Provider>
    </HomeStyle>
}</ThemeProvider>
  )
}
)

export default App;