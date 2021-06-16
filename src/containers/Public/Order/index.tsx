import React from 'react'
import {OrderList} from '../../../components/ListDishes'

import styles from './styles.module.scss'
import Payment from '../Payment'
import {ColorfulButtonSmall} from '../../../components/Buttons/ColorfuButton/Small'

export const Order = () => {
    return (
        <div className={styles['aside-block-order']}>
            <h2 className={styles['header-title-order']}>Order #12345</h2>
            <ul className={styles['set-button-order']}>
                <li>
                    <ColorfulButtonSmall
                        content={'Dine in'}
                        action={'dine'}
                        active={true}
                    />
                </li>
                <li>
                    <ColorfulButtonSmall content={'To go'} action={'go'} active={false}/>
                </li>
                <li>
                    <ColorfulButtonSmall
                        content={'Delivery'}
                        action={'delivery'}
                        active={false}
                    />
                </li>
            </ul>
            <div
                className={[
                    styles['display-flex-row'],
                    styles['order-card-description'],
                    styles['border-bottom'],
                ].join(' ')}
            >
                <div
                    className={[
                        styles['display-flex-row'],
                        styles['card-order'],
                        styles['justify-content-beetw'],
                    ].join(' ')}
                >
                    <div>Item</div>
                    <div>Qty</div>
                </div>
                <div className={styles['order-card-action']}>
                    <div>Price</div>
                </div>
            </div>
            <OrderList/>
            <div className={styles['set-func-payment']}>
                <div className={styles['result-price']}>
                    <div className={styles['display-flex-row']}>
            <span
                className={[styles['block'], styles['block-opacity']].join(' ')}
            >
              Discount:
            </span>
                        <span>$ 9,48</span>
                    </div>
                    <div
                        className={[
                            styles['display-flex-row'],
                            styles['padding-price'],
                        ].join(' ')}
                    >
                        <span className={[styles['block'], styles['block-opacity']].join(' ')}>Subtotal:</span>
                        <span>$ 14,56</span>
                    </div>
                    <Payment/>
                </div>
            </div>
        </div>
    )
}
