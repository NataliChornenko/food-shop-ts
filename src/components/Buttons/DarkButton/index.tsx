import React from 'react'
import './styles.component.scss'
import { IButton } from '../../../models/shop'

export const DarkButton = (props: IButton) => {
  return (
    <button
      onClick={props.action}
      className={`btn-dark ${
        props.active ? 'dark-active' : 'dark-none-active'
      }`}
    >
      {props.content}
    </button>
  )
}
