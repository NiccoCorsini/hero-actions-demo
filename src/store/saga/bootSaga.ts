import { all, takeLatest } from "redux-saga/effects";
import { AuthActionsTriggersTypes } from "../../definitions/store/actions/auth";
import { loginSaga, logoutSaga } from "./auth";

export default function* bootSaga() {
  yield all([
    takeLatest(AuthActionsTriggersTypes.LOGIN, loginSaga),
    takeLatest(AuthActionsTriggersTypes.LOGOUT, logoutSaga),
  ]);
}
