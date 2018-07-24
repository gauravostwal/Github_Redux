import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import App from './components/App/App';
import rootReducer from './reducers/rootreducers';
import Pro from './components/Profile/profile';
import Follow from './components/followers/followers';
import Following from './components/following/following';
import Login from './components/Login/login';
import Repository from './components/Repository/repository';

const store = createStore(
    rootReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/login/:id" component={App} />
          <Route path="/users/:id" render={props => <Pro {...props} />} />
          <Route path="/followers/:id" component={Follow} />
          <Route path="/following/:id" component={Following} />
          <Route path="/issues/:id" component={Repository} />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>, document.getElementById('root'),
);
