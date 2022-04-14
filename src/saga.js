import { all } from '@redux-saga/core/effects'
import { emailsSaga } from './pages/EmailTable/emailTableSaga'

export default function* saga() {
  yield all([emailsSaga()])
}
