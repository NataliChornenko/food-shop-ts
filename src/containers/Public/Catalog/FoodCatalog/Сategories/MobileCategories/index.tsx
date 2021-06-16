import styles from '../styles.module.scss';
import {categoryProducts} from '../../../../../../fake-data/fake-data';
import React from 'react';

export const MobileCategoriesDishes = (props: { active: number, chooseCategory: any }) => {
    return (
        <div>
            <select className={styles['catalog-select']} onChange={(e) => props.chooseCategory(e.target.value)}>
                {categoryProducts.map((cat, index) => (
                    <option key={`mobile-select-${index}`} value={index} selected={props.active === index}>{cat}</option>
                ))}
            </select>
        </div>
    )
}