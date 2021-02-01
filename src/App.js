import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import './App.css';
// import reducer, { minus, add, reset } from './Counter/redux';
import Home from './Home/containers/Home';
import Users from './Users/containers/Users';
import storeReducer from './store';
import thunk from 'redux-thunk';

const store = createStore(storeReducer, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.counterInStore.getState()))
// store.dispatch(add())
// store.dispatch(add())
// store.dispatch(minus())
// store.dispatch(reset())
// store.dispatch(add())
// store.dispatch(add())


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
