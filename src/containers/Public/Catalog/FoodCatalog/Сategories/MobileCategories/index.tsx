import styles from '../styles.module.scss';
import {categoryProducts} from '../../../../../../fake-data/fake-data';
import React from 'react';

export const MobileCategoriesDishes = () => {
    return (
        <div>
            <select className={styles['catalog-select']}>
                {categoryProducts.map((cat, index) => (
                    <option key={`mobile-select${index}`}>{cat}</option>
                ))}
            </select>
        </div>
    )
}