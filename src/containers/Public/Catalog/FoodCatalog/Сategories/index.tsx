import React from 'react'
import {categoryProducts} from '../../../../../fake-data/fake-data'
import styles from './styles.module.scss'

export const CategoriesDishes = (props: {active: number, chooseCategory: any }) => {
    return (
        <ul
            className={[
                styles['category-products'],
                styles['display-block'],
                styles['display-web'],
            ].join(' ')}
        >
            {categoryProducts.map((cat, index) => (
                <li
                    className={
                        props.active === index
                            ? styles['category-active']
                            : styles['none-active']
                    }
                    key={`web-cat${index}`}
                >
                    <a onClick={() => props.chooseCategory(index)}>{cat}</a>
                </li>
            ))}
        </ul>
    )
}

