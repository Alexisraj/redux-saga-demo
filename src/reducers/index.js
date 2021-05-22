import { combineReducers } from "redux";
import bookReducer from "../reducers/bookReducer";

const rootReducer = combineReducers({
  bookReducer: bookReducer,
});

export default rootReducer;
