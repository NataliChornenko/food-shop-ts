import React from 'react';
import {IOrder} from '../../../models/shop';
import styles from './styles.module.scss';
import iconTrash from '../../../sources/images/VectorTrash.svg';

export const CardOrder = (props: { order: IOrder , handleChange: any, key: any}) => {
    return (
        <div className={styles['card-dishes-order']}>
            <div
                className={[
                    styles['display-flex-row'],
                    styles['order-card-description'],
                ].join(' ')}
            >
                <div
                    className={[
                        styles['display-flex-row'],
                        styles['card-order'],
                        styles['justify-content-beetw'],
                    ].join(' ')}
                >
                    <div className={styles['display-flex-row']}>
                        <img
                            src={
                                'https://assets.misteram.com.ua/misteram-public/95a63f49ff1c74e694f307f313941d59-400x0.png'
                            }
                            alt={'food'}
                        />
                        <div className={styles['display-flex-column']}>
                            <a className={styles['block']} href={'#'}>
                                {props.order.title.slice(0, 15) + '...'}
                            </a>
                            <span className={styles['block']}>{props.order.price}</span>
                        </div>
                    </div>
                    <input
                        placeholder={'2'}
                        name={'number-dishes'}
                        onChange={props.handleChange}
                        className={[
                            styles['button-dark'],
                            styles['button-dark-small'],
                        ].join(' ')}
                    />
                </div>
                <div
                    className={[styles['order-card-action'], styles['price']].join(' ')}
                >
                    <p>{props.order.amount} $</p>
                </div>
            </div>
            <div
                className={[
                    styles['display-flex-row'],
                    styles['description-dish-order'],
                ].join(' ')}
            >
                <div className={styles['card-order']}>
                    <input
                        placeholder={'Order Note...'}
                        name={props.key}
                        className={styles['button-dark']}
                        onChange={props.handleChange}
                    />
                </div>
                <div className={styles['order-card-action']}>
                    <button className={styles['button-trash']}>
                        <img src={iconTrash} alt={'trash'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
