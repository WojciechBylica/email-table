const localStorageKey = 'emails'

export const saveEmailsInLocalStorage = (emails) =>
  localStorage.setItem(localStorageKey, JSON.stringify(emails))

export const getEmailsFromLocalStorage = () => {
  return localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : []
}
