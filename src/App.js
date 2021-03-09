import './App.css';
// import mygif from './mygif.gif';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login,Home} from "./components/myjs";


function App() {
  return (
    <div className="myapp">
      <Router>
        <Switch>
          <Route path="/" exact component={()=>< Login/>} />
          <Route path="/home" exact component={()=>< Home/>} />
        </Switch>

      </Router>
    </div>
    
  );
}

export default App;
