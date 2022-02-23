import { CLEAR_NOTIFICATION, SHOW_NOTIFICATION } from "./actionTypes";
import { TNotify } from "./types";
import { action } from "typesafe-actions";

export const showNotification = (payload: TNotify) => action(SHOW_NOTIFICATION, payload);
export const clearNotification = () => action(CLEAR_NOTIFICATION);
