import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import App from './components/App/App';
import rootReducer from './reducers/rootreducers';
import Pro from './components/Profile/profile';
import Follow from './components/followers/followers';
import Following from './components/following/following';

const store = createStore(
    rootReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
                <Route exact path="/" component={App} />
                <Route path="/users/:id" render={props => <Pro {...props} />} />
                <Route path="/followers/:id" component={Follow} />
                <Route path="/following/:id" component={Following} />
        </div>
    </Router>
    </Provider>, document.getElementById('root')
);
