import React from 'react';
import {Router , browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes} />,
    document.getElementById('root'));
