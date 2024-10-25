import { call, CallEffect, delay, put, PutEffect } from "redux-saga/effects";
import {
  authChange,
  loginActionFailure,
  loginActionRequest,
  loginActionSuccess,
  loginActionTrigger,
  logoutActionFailure,
  logoutActionRequest,
  logoutActionSuccess,
} from "../actions/auth";
import { fakeLogin, fakeLogout } from "../../api/auth";
import { FakeLoginResponse } from "../../definitions/api/auth";

export function* loginSaga({
  payload,
}: ReturnType<typeof loginActionTrigger>): Generator<
  PutEffect | CallEffect,
  void,
  FakeLoginResponse
> {
  try {
    yield put(loginActionRequest());

    const credentials = yield call(fakeLogin, payload);

    yield put(loginActionSuccess({ ...credentials }));
    yield delay(3000);
    yield put(authChange({ status: "idle" }));
  } catch (e) {
    yield put(loginActionFailure({ error: e as Error }));
  }
}

export function* logoutSaga() {
  try {
    yield put(logoutActionRequest());
    yield call(fakeLogout);
    yield put(logoutActionSuccess());
    yield delay(3000);
    yield put(authChange({ status: "idle" }));
  } catch (e) {
    yield put(logoutActionFailure({ error: e as Error }));
  }
}
