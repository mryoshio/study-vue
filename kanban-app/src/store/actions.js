/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Auth, List, Task } from '../api'
/* eslint-enable no-unused-vars */

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(err => { throw err })
  },
  fetchLists: ({ commit }) => {
    throw new Error('fetchLists action not implemented')
  },
  addTask: ({ commit }) => {
    throw new Error('addTask action not implemented')
  },
  updateTask: ({ commit }) => {
    throw new Error('updateTask action not implemented')
  },
  removeTask: ({ commit }) => {
    throw new Error('removeTask action not implemented')
  },
  logout: ({ commit }) => {
    throw new Error('logout action not implemented')
  }
}
