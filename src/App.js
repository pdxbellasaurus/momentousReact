import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SingleEvent from './pages/SingleEvent';
import CreateEvent from './pages/CreateEvent';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events/:id" component={SingleEvent} />
          <Route exact path="/new" component={CreateEvent} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
