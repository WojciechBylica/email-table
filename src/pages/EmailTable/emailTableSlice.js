import { createSlice } from '@reduxjs/toolkit'
import { initialData } from './initialData'

const emailTableSlice = createSlice({
  name: 'emails',
  initialState: {
    emails: initialData,
    status: 'initial',
  },
  reducers: {
    addMail: ({ emails }, { payload: email }) => {
      emails.push(email)
    },
    removeMail: ({ emails }, { payload: emailId }) => {
      const index = emails.findIndex(({ id }) => id === emailId)
      emails.splice(index, 1)
    },
  },
})

export const { addMail, removeMail } = emailTableSlice.actions

export const selectEmailsState = (state) => state.emails

export const selectEmails = (state) => selectEmailsState(state).emails

export default emailTableSlice.reducer
