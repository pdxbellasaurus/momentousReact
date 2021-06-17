import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events/:id" component={SingleEvent} />
          <Route exact path="/new" component={NewEvent} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
