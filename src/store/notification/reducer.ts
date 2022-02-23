import {ActionType} from "typesafe-actions";
import { Reducer } from 'redux';
import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";
import {TNotify} from "./types";
import * as Actions from './actions';

type TActions = typeof Actions;
type TTNotifyActions = ActionType<TActions>;
const initialState: TNotify = {type: '', message: ''};

const notificationReducer: Reducer<TNotify, TTNotifyActions> = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {...action.payload, type: action.payload.type || 'success'};
        case CLEAR_NOTIFICATION:
            return {type: '', message: ''};
        default:
            return state;
    }
};

export default notificationReducer;
