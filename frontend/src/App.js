import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
