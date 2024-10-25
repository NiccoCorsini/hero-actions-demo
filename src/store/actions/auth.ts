import { createActionForPayloads } from "hero-actions";
import {
  AuthActionsPayloads,
  AuthActionsTriggersPayloads,
  AuthActionsTriggersTypes,
  AuthActionsTypes,
} from "../../definitions/store/actions/auth";

// Actions triggers
const authActionsTriggersFactory =
  createActionForPayloads<AuthActionsTriggersPayloads>();

export const loginActionTrigger = authActionsTriggersFactory(
  AuthActionsTriggersTypes.LOGIN
);
export const logoutActionTrigger = authActionsTriggersFactory(
  AuthActionsTriggersTypes.LOGOUT
);

// Store Actions
const authActionsFactory = createActionForPayloads<AuthActionsPayloads>();

export const loginActionRequest = authActionsFactory(
  AuthActionsTypes.LOGIN_REQUEST
);
export const loginActionSuccess = authActionsFactory(
  AuthActionsTypes.LOGIN_SUCCESS
);
export const loginActionFailure = authActionsFactory(
  AuthActionsTypes.LOGIN_FAILURE
);
export const logoutActionRequest = authActionsFactory(
  AuthActionsTypes.LOGOUT_REQUEST
);
export const logoutActionSuccess = authActionsFactory(
  AuthActionsTypes.LOGOUT_SUCCESS
);
export const logoutActionFailure = authActionsFactory(
  AuthActionsTypes.LOGOUT_FAILURE
);

export const authChange = authActionsFactory(AuthActionsTypes.CHANGE);
