import React from 'react';

import tasty from '../../../sources/images/tasty.jpg';
import styles from './styles.module.scss';
import {ICardFood} from '../../../models/shop';

export const CardDish = (props: { food: ICardFood }) => {
    return (
        <div className={styles['card-food']}>
            <div>
                <img src={tasty} alt={'food'}/>
            </div>
            <div className={[styles['card-content'], styles['display-flex-column']].join(' ')}>
                <h3 className={styles['card-food-title']}>
                    <a href={'#'}>{props.food.title}</a>
                </h3>
                <span className={[styles['card-food-price'], styles['block']].join(' ')}>{props.food.price} $</span>
                <span className={[styles['card-food-description'], styles['block']].join(' ')}>
          {props.food.description}{' '}
        </span>
            </div>
        </div>
    )
}
