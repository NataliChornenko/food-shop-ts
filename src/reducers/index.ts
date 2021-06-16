import { combineReducers } from 'redux'
import * as userReducer from './user'
import * as usersReducer from './users'

export interface IStoreState {
  user: userReducer.State
  users: usersReducer.IState
}

export const initState: IStoreState = {
  user: userReducer.initState,
  users: usersReducer.initState,
}

export default combineReducers<IStoreState>({
  user: userReducer.reducer,
  users: usersReducer.reducer,
})
