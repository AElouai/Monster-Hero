import React from 'react';
import { Route , IndexRoute } from 'react-router';
import Result from './Pages/result';
import Home from './Pages/home';
import Pages from './Pages';
import {Quizzes} from './Pages/Quizes';

export default (
    <Route path="/" component={Pages}>
        <IndexRoute component={Home}/>
        <Route path="result" component={Result}/>
        <Route path="question" component={Quizzes}/>
    </Route>
);