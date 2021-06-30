import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SingleEvent from './pages/SingleEvent';
import CreateEvent from './pages/CreateEvent';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'bulma/css/bulma.css';
import GlobalContext from './utils/GlobalState';


function App() {
  const [state, setState] = useState({
    loggedIn: false,
    username: "",
    id: "",
    onUpdate: (userData) => {

      setState({ ...state, ...userData });
    }
  })

  // function handleLogin(userData) {
  //   setState({
  //     username: userData.username,
  //     id: userData._id
  //   })
  // }

  return (
    <GlobalContext.Provider value={state}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events/:id" component={SingleEvent} />
          <Route exact path="/new" component={CreateEvent} />
          <Route exact path="/users/:id" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
        </div>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;