import React from 'react';
import {Link} from 'react-router-dom';
import {IMenuCardProps} from '../../../models/shop';

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
                    <img className={'icon-menu-color'} src={props.card.icon} alt={'menu-item'}/>
                </div>
            </Link>
        </li>
    )
}
