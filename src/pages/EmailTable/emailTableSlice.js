import { createSlice } from '@reduxjs/toolkit'
import { getEmailsFromLocalStorage } from './emailsLocalStorage'

const emailTableSlice = createSlice({
  name: 'emails',
  initialState: {
    emails: getEmailsFromLocalStorage(),
    status: 'initial',
    sortedByDate: 'initial',
  },
  reducers: {
    addMail: ({ emails }, { payload: email }) => {
      emails.push(email)
    },
    removeMail: ({ emails }, { payload: emailId }) => {
      const index = emails.findIndex(({ id }) => id === emailId)
      emails.splice(index, 1)
    },
    sortByTitles: (state) => {
      state.emails.sort((a, b) => a.title.localeCompare(b.title))
    },
    sortByDates: (state) => {
      state.emails.sort((a, b) => a.date.localeCompare(b.date))
      state.sortedByDate = 'new-old'
    },
    sortByDatesReversed: (state) => {
      state.emails.sort((a, b) => b.date.localeCompare(a.date))
      state.sortedByDate = 'old-new'
    },
  },
})

export const {
  addMail,
  removeMail,
  sortByTitles,
  sortByDates,
  sortByDatesReversed,
} = emailTableSlice.actions

export const selectEmailsState = (state) => state.emails
export const selectEmails = (state) => selectEmailsState(state).emails
export const selectSortedByDate = (state) =>
  selectEmailsState(state).sortedByDate

export default emailTableSlice.reducer
