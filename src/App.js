import { UserForm } from "./components/FormikBasic/UserForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form-1">
            <UserForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
