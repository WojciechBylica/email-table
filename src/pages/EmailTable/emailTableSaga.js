import { call, takeEvery, select } from 'redux-saga/effects'
import { saveEmailsInLocalStorage } from './emailsLocalStorage'
import { selectEmails } from './emailTableSlice'

function* saveEmailsInLocalStorageHandler() {
  const emails = yield select(selectEmails)
  yield call(saveEmailsInLocalStorage, emails)
}

export function* emailsSaga() {
  yield takeEvery('*', saveEmailsInLocalStorageHandler)
}
