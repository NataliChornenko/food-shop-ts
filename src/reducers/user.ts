import { IUser } from 'models/user'

export enum actionTypes {
  SET = 'USER_SET',
  UNSET = 'USER_UNSET',
}

interface ISetUserActions {
  type: actionTypes.SET
  payload: IUser
}

interface IUnsetUsersAction {
  type: actionTypes.UNSET
}

type UserActions = ISetUserActions | IUnsetUsersAction

export type State = Readonly<IUser>

export const initState: State = {
  id: 0,
  name: '',
  company: {
    name: '',
  },
}

export function reducer(state = initState, action: UserActions): State {
  switch (action.type) {
    case actionTypes.SET:
      return { ...action.payload }
    case actionTypes.UNSET:
      return { ...initState }
    default:
      return state
  }
}
