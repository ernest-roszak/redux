import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {createStore } from "redux";
import { Provider } from "react-redux";
import './App.css';
import reducer, { minus, add, reset } from './Counter/redux';
import Home from './Home/containers/Home';
import Users from './Users/containers/Users';

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()))
store.dispatch(add())
store.dispatch(add())
store.dispatch(minus())
store.dispatch(reset())
store.dispatch(add())
store.dispatch(add())


function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
