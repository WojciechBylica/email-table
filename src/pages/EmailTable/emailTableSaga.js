import {
  throttle,
  call,
  put,
  delay,
  takeEvery,
  select,
} from 'redux-saga/effects'
import { selectEmails } from './emailTableSlice'

function* saveEmailsInLocalStorageHandler() {
  const emails = yield select(selectEmails)
  yield call(saveEmailsInLocalStorageHandler, emails)
}

export function* emailsSaga() {
  console.log('saga')
  yield takeEvery('*', saveEmailsInLocalStorageHandler)
}
