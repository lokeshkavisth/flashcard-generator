import { createStore } from "redux";
import { rootReducers } from "./redux/reducers/rootReducers";

// redux store for managing the state data for flashcard
export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
