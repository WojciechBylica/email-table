import { all } from '@redux-saga/core/effects'
import { saga } from './saga'

export default function* rootSaga() {
  yield all([saga()])
}
