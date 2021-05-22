import rootReducer from "../src/reducers/index";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const persistState = (state) => {
  const serializedState = JSON.stringify(state);
  if (serializedState) localStorage.setItem("state", serializedState);
};
const rehydrateState = () => {
  const localState = localStorage.getItem("state");
  if (!localStorage) return undefined;
  return JSON.parse(localState);
};

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState || rehydrateState(),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  store.subscribe(() => persistState(store.getState()));
  return store;
}
