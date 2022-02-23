import {combineReducers} from "redux";
import notificationReducer from "./notification/reducer";

const rootReducer = combineReducers({
    notify: notificationReducer,
});

export default rootReducer;
