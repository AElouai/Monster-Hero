import React from 'react';
import {Router , browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import configureStore from './store/configure.store';
import {Provider} from 'react-redux';
import './index.css';
import routes from './routes';
import { addQuestions } from './actions/quiz.actions'

const store = configureStore();
// store.dispatch(addQuestions);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
