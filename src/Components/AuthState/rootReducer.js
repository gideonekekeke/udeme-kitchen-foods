import { combineReducers } from "redux";
import { FoodReducer } from "./reducerState";

export const reducer = combineReducers({
  Food: FoodReducer,
});
