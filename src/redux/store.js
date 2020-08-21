import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";
import rootReducer from "./reducers/rootReducer";
import { loadState, saveState } from "../api/localStorage";

const preloadedState = loadState();

const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      userData: store.getState().userData,
      console: {
        ratio: store.getState().console.ratio,
        requests: store.getState().console.requests
      }
    });
  }),
  1000
);

export default store;
