import { takeEvery, all, call, fork, put } from "redux-saga/effects";

import { SIGNUPUSER, SIGNUPUSERSUCCESS, SIGNUPUSERERROR } from "./actionTypes";

import { SignupUserSuccess, SignupUserError } from "./actions";
import { Signup_User } from "../../../helper/fake_backend";

function* Sign_up({ payload }) {
  console.log("Register");
  try {
    const response = yield call(
      Signup_User,
      "http://localhost:4000/users/signup",
      payload
    );

   yield put(SignupUserSuccess(response))
  } catch (err) {
    yield put(SignupUserError(err));
  }
}

export function* watchUserSignup() {
  yield takeEvery(SIGNUPUSER, Sign_up);
}

function* SignupSaga() {
  yield all([fork(watchUserSignup)]);
}

export default SignupSaga;
