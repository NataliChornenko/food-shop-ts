import React from 'react';
import './styles.component.scss';
import { IButton } from '../../../../models/shop';
import iconPlus from '../../../../sources/images/Plus.svg'

export const ColorfulButtonBig = (props: IButton) => {
  return (
    <button
      className={`btn btn--colorful-big ${
        props.active ? 'colorful-active-big' : 'colorful-none-active-big'
      }`}
      onClick={props.action}
    >
        {props.content==='+'?(<img src={iconPlus} alt={'icon-add'}/>):props.content}
    </button>
  )
}
