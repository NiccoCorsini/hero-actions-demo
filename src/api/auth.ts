import {
  FakeLoginPayload,
  FakeLoginResponse,
  FakeLogoutResponse,
} from "../definitions/api/auth";
import { AuthActionsTriggersPayloads } from "../definitions/store/actions/auth";

export const fakeCredentials: AuthActionsTriggersPayloads["auth::login::trigger"] =
  {
    username: "user",
    password: "123456",
  };

export const fakeLogin = async ({
  username,
  password,
}: FakeLoginPayload): Promise<FakeLoginResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (
    fakeCredentials.username !== username ||
    fakeCredentials.password !== password
  ) {
    const error = new Error("Invalid credentials");
    error.name = "AuthenticationError";
    throw error;
  }
  return await new Promise<FakeLoginResponse>((resolve) =>
    setTimeout(() => {
      resolve({
        userId: "fake_user_id",
        token: "fake_user_token",
      });
    }, 500)
  );
};

export const fakeLogout = async (): Promise<FakeLogoutResponse> => {
  return await new Promise<FakeLogoutResponse>((resolve) =>
    setTimeout(() => {
      resolve({
        status: 200,
        statusText: "OK",
      });
    }, 2500)
  );
};
