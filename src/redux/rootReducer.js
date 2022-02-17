import { combineReducers } from "redux";
import ToDoListReducer from "./reducers/ToDoListReducer";

export const rootReducer = combineReducers({
  ToDoListReducer,
});
