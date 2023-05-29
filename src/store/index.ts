import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducer/authReducer";
import { ActionType } from "../types/authTypes";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk];

export const store: Store<RootState, ActionType> = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
