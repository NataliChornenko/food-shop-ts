import React from 'react'
import './styles.component.scss'
import { IButton } from '../../../../models/shop'
export const ColorfulButtonSmall = (props: IButton) => {
  return (
    <button
      className={`btn btn--colorful-small ${
        props.active ? 'colorful-active-small' : 'colorful-none-active-small'
      }`}
      onClick={()=>props.action()}
    >
      {props.content}
    </button>
  )
}
