import "./App.css";
// import mygif from './mygif.gif';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Home,Signin,Register } from "./components/myjs";

function App() {
  return (
    <div className="myapp">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Login />} />{" "}
          <Route path="/home" exact component={() => <Home />} />{" "}
          <Route path="/signin" exact component={() => <Signin/>} />{" "}
          <Route path="/register" exact component={() => <Register />} />{" "}
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
