import {
  createStore, applyMiddleware, combineReducers,
  compose, CombinedState, Action, 
} from "redux";
import {  persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import StoreSchema, { StoreI } from "./schema";

import user from "./ducks/user_d";

import { Interceptor } from "api/api";

const ducksReducer = combineReducers<StoreI>({
  user,
});

type AppReducerT = CombinedState<StoreI>;

const appReducer = (state: StoreI, action: Action): AppReducerT => {
  if (action.type === "LOGOUT") {
    return ducksReducer({
      ...state,
      user: StoreSchema.User
    } as any, action);
  }
  return ducksReducer(state, action);
};

const ducksPersisted = persistReducer<any, Action<AppReducerT>>({
  key: "root",
  storage,
  whitelist: ["user"]
}, appReducer);

// eslint-disable-next-line max-len
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

const STORE = createStore(ducksPersisted, composeEnhancers(applyMiddleware(thunk)));

Interceptor(STORE);

export const Persistor = persistStore(STORE);
export default STORE;
