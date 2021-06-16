import { IUser } from 'models/user'

export enum actionTypes {
  SET = 'USERS_SET',
  UNSET = 'USERS_UNSET',
}

interface ISetUsersAction {
  type: actionTypes.SET
  payload: IUser[]
}

interface IUnsetUsersAction {
  type: actionTypes.UNSET
}

type UsersActions = ISetUsersAction | IUnsetUsersAction

export interface IState {
  readonly users: IUser[]
}

export const initState: IState = {
  users: [],
}

export function reducer(state = initState, action: UsersActions): IState {
  switch (action.type) {
    case actionTypes.SET:
      return {
        users: action.payload,
      }
    case actionTypes.UNSET:
      return initState
    default:
      return state
  }
}
