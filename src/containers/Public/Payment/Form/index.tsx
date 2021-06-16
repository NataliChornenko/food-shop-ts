import React from 'react'
import {useState} from 'react'
import styles from '../styles.module.scss'
import {SelectDishes} from '../../Catalog/FoodCatalog/SelectDishes'
import {typePaymentData} from '../../../../fake-data/fake-data'

export const PaymentForm = () => {
    const [payment, setPayment] = useState('credit')

    const checkTypePayment = (type: string) => {
        setPayment(type)
    }
    return (
        <div>
            <ul
                className={[styles['display-flex-row'], ['set-type-payment']].join(' ')}
            >
                {typePaymentData.map((type: any) => (
                    <li className={styles['padding-button-pay']}>
                        <button
                            className={[
                                styles['button-type-pay'],
                                [payment === type.type ? styles['active-payment-type'] : ''],
                            ].join(' ')}
                            onClick={() => checkTypePayment(type.type)}
                        >
                            <div>
                                <img src={type.icon}/>
                            </div>
                            <span className={styles['block']}> {type.title}</span>
                        </button>
                    </li>
                ))}
            </ul>
            {payment === 'credit' ? <FormPay/> : null}
        </div>
    )
}

const FormPay = () => {
    return (
        <div
            className={[styles['form-container'], styles['display-flex-column']].join(
                ' '
            )}
        >
            <div
                className={[
                    styles['form-container'],
                    styles['display-flex-column'],
                ].join(' ')}
            >
                <label htmlFor="name">Cardholder Name</label>
                <input
                    placeholder={'Levi Ackerman'}
                    id="name"
                    className={styles['input-dark-border']}
                    type="text"
                />
            </div>
            <div
                className={[
                    styles['form-container'],
                    styles['display-flex-column'],
                ].join(' ')}
            >
                <label htmlFor="cardnumber">Card Number</label>
                <input
                    placeholder={'2564 1421 0897 1244'}
                    id="cardnumber"
                    className={styles['input-dark-border']}
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                />
            </div>
            <div
                className={[
                    styles['display-flex-row'],
                    styles['bottom-border-payment'],
                ].join(' ')}
            >
                <div
                    className={[
                        styles['form-container'],
                        styles['display-flex-column'],
                        styles['input-small'],
                    ].join(' ')}
                >
                    <label htmlFor="expirationdate">Expiration (mm/yy)</label>
                    <input
                        id="expirationdate"
                        className={styles['input-dark-border']}
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
                <div
                    className={[
                        styles['form-container'],
                        styles['display-flex-column'],
                    ].join(' ')}
                >
                    <label htmlFor="securitycode">Security Code</label>
                    <input
                        id="securitycode"
                        type="text"
                        className={styles['input-dark-border']}
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
            </div>
            <div className={styles['display-flex-row']}>
                <div
                    className={[
                        styles['form-container'],
                        styles['display-flex-column'],
                        styles['modal-select'],
                    ].join(' ')}
                >
                    <label htmlFor="securitycode">Order type</label>
                    <SelectDishes/>
                </div>
                <div
                    className={[
                        styles['form-container'],
                        styles['display-flex-column'],
                    ].join(' ')}
                >
                    <label htmlFor="securitycode">Table no.</label>
                    <input
                        placeholder={'140'}
                        id="securitycode"
                        type="text"
                        className={[styles['input-dark-border'], styles['button-table-no']].join(' ')}
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
            </div>
        </div>
    )
}
