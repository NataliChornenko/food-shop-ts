import * as React from 'react'
import { Route, Redirect, RouteProps } from 'react-router'
import { message } from 'antd'
import { connect } from 'react-redux'

import { IUser } from 'models/user'
import { IStoreState } from 'reducers/index'

interface IProps {
  roles: string[]
  message?: string
  redirectTo?: string | object
  user: IUser
}

export const PrivateRoute = (
  props: RouteProps & IProps
): React.ReactElement => {
  let allow = false

  // here private logic ...
  // const userRoles = ['customer']
  // if (userRoles.some(userRole => props.roles.includes(userRole))) allow = true
  allow = !!(props.user.id && props.user.id === 1)

  // show a notification
  if (!allow)
    message.warning(
      props.message ? props.message : `You have not access to this page`
    )

  return allow ? (
    <Route {...props} />
  ) : (
    <Redirect to={props.redirectTo ? props.redirectTo : '/'} />
  )
}

export default connect((state: IStoreState) => ({ user: state.user }))(
  PrivateRoute
)
