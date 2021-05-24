import { combineReducers } from "redux";
import bookReducer from "../reducers/bookReducer";

const rootReducer = combineReducers({
  bookStore: bookReducer,
});

export default rootReducer;
