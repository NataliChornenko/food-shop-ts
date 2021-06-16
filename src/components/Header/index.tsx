import React, {useState} from 'react';
import Modal from 'react-modal';

import {days, months} from '../../fake-data/fake-data';
import {SearchButton} from './SearchButton';
import {MobileMenu} from '../NavBar/MobileMenu';
import {Order} from '../../containers/Public/Order';
import iconCart from '../../sources/images/CardCredit.svg';
import styles from './styles.module.scss';

const customStyles = {
    content: {
        top: '0',
        right: '0',
        bottom: '0',
        border: 'none',
        left: '35%',
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.66)',
        zIndex: 10000,
    },
}

export const Header = () => {
    const [state, setState] = useState(false)
    const openModal = () => {
        setState(true)
    }
    const closeModal = () => {
        setState(false)
    }
    const date = new Date()

    return (
        <div className={styles['header-block']}>
            <div>
                <div
                    className={[
                        styles['display-flex-row'],
                        styles['justify-content-between'],
                        styles['display-cart-mobile']
                    ].join(' ')}
                >
                    <MobileMenu/>
                    <button className={styles['btn-icon']} onClick={openModal}>
                        <img src={iconCart} alt={'icon-cart'}/>
                    </button>
                    <Modal
                        isOpen={state}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div>
                            <Order/>
                        </div>

                    </Modal>
                </div>
                <h1 className={styles['header-title']}>Jaegar Resto</h1>
                <span
                    className={[
                        styles['header-show-date'],
                        styles['block'],
                        styles['block-opacity']
                    ].join(' ')}
                >
          {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]},{' '}
                    {date.getFullYear()}
        </span>
            </div>
            <SearchButton content={`Search for food, coffe, etc..`} action={'func'}/>
        </div>
    )
}
