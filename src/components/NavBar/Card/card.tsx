import {IMenuCardProps} from '../../../models/shop'
import {Link} from 'react-router-dom'
import React from 'react'

export const MenuCard = (props: IMenuCardProps) => {
    return (
        <li
            onClick={() => props.choosePage(props.index)}
            className={
                props.active === props.index
                    ? 'icon-menu active-menu'
                    : 'icon-menu none-active'
            }
        >
            <Link to={`/${props.card.title}`}>
                <div className={'pink-square'}>
                    <img className={'icon-menu-color'} src={props.card.icon}/>
                </div>
            </Link>
        </li>
    )
}
