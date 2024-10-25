import {
  AuthActionsPayloads,
  AuthActionsTriggersPayloads,
} from "../store/actions/auth";

export type FakeLoginPayload =
  AuthActionsTriggersPayloads["auth::login::trigger"];

export type FakeLoginResponse = AuthActionsPayloads["auth::login::success"];

export type FakeLogoutResponse = {
  status: number;
  statusText: string;
};
