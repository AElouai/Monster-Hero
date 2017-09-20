import {combineReducers} from "redux";
import { response ,questions } from "./quiz.reducers";

const rootReducers = combineReducers({
    response , questions
});

export default rootReducers;