import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";
import rootReducer from "./reducers/rootReducer";
import { loadState, saveState } from "../api/localStorage";

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      userData: store.getState().userData,
      requestHistory: {
        requests: store.getState().requestHistory.requests
      },
      console: {
        ratio: store.getState().console.ratio
      }
    });
  }),
  1000
);

export default store;
