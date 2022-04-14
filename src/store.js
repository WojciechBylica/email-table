import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import emailsReducer from './pages/EmailTable/emailTableSlice'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    emails: emailsReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(saga)

export default store
