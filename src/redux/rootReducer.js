import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router/immutable';

function createReducer(history) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
  });

  return rootReducer;
}

export default createReducer;
