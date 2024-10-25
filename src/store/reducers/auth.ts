import { createHandlers, createReducer } from "hero-actions";
import { AuthSlice } from "../../definitions/store/reducers/auth";
import { AuthActionsPayloads } from "../../definitions/store/actions/auth";

const authInitialState: AuthSlice = {
  status: "idle",
  isAuthenticated: false,
};

const authHandlers = createHandlers<AuthSlice, AuthActionsPayloads>()({
  "auth::login::request": (state) => ({
    ...state,
    status: "loading",
    error: undefined,
  }),
  "auth::login::success": (state, action) => ({
    ...state,
    ...action.payload,
    isAuthenticated: true,
    status: "success",
    error: undefined,
  }),
  "auth::login::failure": (state, action) => ({
    ...state,
    ...action.payload,
    isAuthenticated: false,
    status: "failure",
  }),
  "auth::logout::request": (state) => ({
    ...state,
    status: "loading",
  }),
  "auth::logout::success": (state) => ({
    ...state,
    isAuthenticated: false,
    status: "success",
    error: undefined,
  }),
  "auth::logout::failure": (state, action) => ({
    ...state,
    ...action.payload,
    status: "failure",
  }),
  "auth:changed": (state, action) => ({
    ...state,
    ...action.payload,
  }),
});

export const authReducer = createReducer<AuthSlice, AuthActionsPayloads>(
  authInitialState,
  authHandlers
);
