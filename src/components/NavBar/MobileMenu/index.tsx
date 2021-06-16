import React from 'react';
import {Link} from 'react-router-dom';
import {listMenu} from '../../../fake-data/fake-data';

export const MobileMenu = () => {
    return (
        <div className={'hamburger-menu'}>
            <input id='menu__toggle' type='checkbox'/>
            <label className={'menu__btn btn btn-dark'} htmlFor='menu__toggle'>
                <span></span>
            </label>

            <ul className={'menu__box'}>
                {listMenu.map((menu: any) => (
                    <li>
                        <Link className={'menu__item'} to={`/${menu.title}`}>
                            <img className={'icon-menu-color'} src={menu.icon} alt={'mobile-menu'}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
