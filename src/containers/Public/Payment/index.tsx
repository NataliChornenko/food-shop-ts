import React, {useState} from 'react';
import Modal from 'react-modal';
import {PaymentForm} from './Form';
import iconBackArrow from '../../../sources/images/BackArrow.svg';
import {ColorfulButtonBig} from '../../../components/Buttons/ColorfuButton/Big';
import {OrderList} from '../../../components/ListDishes';
import styles from './styles.module.scss';

const customStyles = {
    content: {
        top: '0',
        right: '0',
        bottom: '0',
        border: 'none',
        left: '45%',
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.66)',
        zIndex: 10000,
    },
}
Modal.setAppElement('#root')

export const Payment = () => {
    const [state, setState] = useState(false)
    const openModal = () => {
        setState(true)
    }

    const closeModal = () => {
        setState(false)
    }
    return (
        <div>
            <ColorfulButtonBig
                content={'Continue to Payment'}
                action={openModal}
                active={true}
            />
            <Modal
                isOpen={state}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={styles['display-flex-column']}>
                    <div
                        className={[
                            styles['display-flex-row'],
                            styles['modal-order'],
                            styles['modal-body'],
                            styles['border-right'],
                        ].join(' ')}
                    >
                        <div className={styles['order-rows']}>
                            <div
                                className={[
                                    styles['header-block'],
                                    styles['header-block-order'],
                                ].join(' ')}
                            >
                                <div>
                                    <button
                                        className={styles['button-icon-arrow']}
                                        onClick={closeModal}
                                    >
                                        <i className="fa fa-long-arrow-left" aria-hidden="true"/>
                                        <img src={iconBackArrow} alt={'arrow-back'}/>
                                    </button>
                                    <div
                                        className={[
                                            styles['display-flex-row'],
                                            styles['justify-content-between'],
                                            styles['header-modal-order']
                                        ].join(' ')}
                                    >
                                        <div><h2 className={styles['header-title']}>Confirmation</h2></div>
                                        <div className={'pink-button'}>
                                            <ColorfulButtonBig
                                                content={'+'}
                                                action={closeModal}
                                                active={true}
                                            />
                                        </div>
                                    </div>
                                    <p>Orders #34562</p>
                                </div>
                            </div>
                            <div className={styles['padding-in']}>
                                <OrderList/>
                                <div className={styles['order-info']}>
                                    <div className={styles['result-price']}>
                                        <div className={styles['display-flex-row']}>
                      <span
                          className={[
                              styles['block'],
                              styles['block-opacity'],
                          ].join(' ')}
                      >
                        Discount:
                      </span>
                                            <span>$ 9,48</span>
                                        </div>
                                        <div className={styles['display-flex-row']}>
                      <span
                          className={[
                              styles['block'],
                              styles['block-opacity'],
                          ].join('')}
                      >
                        Subtotal:
                      </span>
                                            <span>$ 14,56</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['vl']}></div>
                        <div className={styles['order-rows']}>
                            <div
                                className={[
                                    styles['header-block'],
                                    styles['header-block-order'],
                                    styles['without-button'],
                                ].join(' ')}
                            >
                                <div>
                                    <button
                                        className={styles['button-icon-arrow']}
                                        onClick={closeModal}
                                    >
                                        <i className="fa fa-long-arrow-left" aria-hidden="true"/>
                                    </button>
                                    <h2 className={styles['header-title']}>Payment</h2>
                                    <p>3 payment method available</p>
                                </div>
                            </div>
                            <div className={styles['padding-in']}>
                                <PaymentForm/>
                                <div className={styles['bottom-block-order']}>
                                    <ColorfulButtonBig
                                        content={'Cancel'}
                                        action={closeModal}
                                        active={false}
                                    />
                                    <ColorfulButtonBig
                                        content={'Confirm'}
                                        action={closeModal}
                                        active={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Payment
