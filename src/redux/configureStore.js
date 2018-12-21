import { createStore, applyMiddleware, compose } from "redux";

import { routerMiddleware } from "connected-react-router/immutable";

import createReducer from "./rootReducer";

export default function configureStore(history) {
  const routerMiddlewaree = routerMiddleware(history);

  const middlewares = [routerMiddlewaree];
  const store = createStore(
    createReducer(history),
    compose(applyMiddleware(...middlewares))
  );
  return store;
}
