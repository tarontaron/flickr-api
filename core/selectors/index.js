import { createSelector } from 'reselect'

export const getTemplate = state => state.template

export const getMessageArr = state => getTemplate(state).message

export const getMessage = createSelector(getMessageArr, messageArr =>
  messageArr.reduce((acc, item) => acc + item, '')
)
