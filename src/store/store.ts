import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { authReducer } from "./reducers/auth";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import bootSaga from "./saga/bootSaga";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);

sagaMiddleware.run(bootSaga);

export default store;
