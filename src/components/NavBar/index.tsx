import React from 'react';
import {useState} from 'react';
import {ICardMenu} from '../../models/shop';
import './styles.modules.scss';
import {listMenu} from '../../fake-data/fake-data';
import {MenuCard} from './Card/card';

export const Menu = () => {
    const [page, setPage] = useState(0)
    const choosePage = (pageNumber: number) => {
        setPage(pageNumber)
    }
    return (
        <div className={'web-menu'}>
            <nav className={'card-menu'}>
                <ul>
                    {listMenu.map((card: ICardMenu, index) => (
                        <MenuCard
                            card={card}
                            active={page}
                            index={index}
                            choosePage={choosePage}
                            key={`menu-item-${index}`}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    )
}
