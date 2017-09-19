import {combineReducers} from "redux";
import { response } from "./quiz.reducers";

const rootReducers = combineReducers({
    response : response
});

export default rootReducers;