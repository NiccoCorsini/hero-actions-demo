import { AuthSlice } from "../reducers/auth";

export enum AuthActionsTriggersTypes {
  LOGIN = "auth::login::trigger",
  LOGOUT = "auth::logout::trigger",
}

export interface AuthActionsTriggersPayloads {
  [AuthActionsTriggersTypes.LOGIN]: { username: string; password: string };
  [AuthActionsTriggersTypes.LOGOUT]: undefined;
}

export enum AuthActionsTypes {
  LOGIN_REQUEST = "auth::login::request",
  LOGIN_SUCCESS = "auth::login::success",
  LOGIN_FAILURE = "auth::login::failure",
  LOGOUT_REQUEST = "auth::logout::request",
  LOGOUT_SUCCESS = "auth::logout::success",
  LOGOUT_FAILURE = "auth::logout::failure",
  // Generic action
  CHANGE = "auth:changed",
}

export interface AuthActionsPayloads {
  [AuthActionsTypes.LOGIN_REQUEST]: undefined;
  [AuthActionsTypes.LOGIN_SUCCESS]: { userId: string; token: string };
  [AuthActionsTypes.LOGIN_FAILURE]: { error: Error };
  [AuthActionsTypes.LOGOUT_REQUEST]: undefined;
  [AuthActionsTypes.LOGOUT_SUCCESS]: undefined;
  [AuthActionsTypes.LOGOUT_FAILURE]: { error: Error };
  // Can update all properties of slice
  [AuthActionsTypes.CHANGE]: Partial<AuthSlice>;
}
