import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "connected-react-router/immutable";

import App from "./App";
import configureStore from "./redux/configureStore";

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
