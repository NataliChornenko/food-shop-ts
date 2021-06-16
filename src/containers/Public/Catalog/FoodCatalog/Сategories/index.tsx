import React from 'react'
import {useState} from 'react'
import {categoryProducts} from '../../../../../fake-data/fake-data'
import styles from './styles.module.scss'

export const CategoriesDishes = () => {
    const [category, setCategory] = useState(0)

    const chooseCategory = (cat: number) => {
        setCategory(cat)
    }
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
                        category === index
                            ? styles['category-active']
                            : styles['none-active']
                    }
                >
                    <a onClick={() => chooseCategory(index)}>{cat}</a>
                </li>
            ))}
        </ul>
    )
}

export const MobileCategoriesDishes = () => {
    return (
        <div>
            <select className={styles['catalog-select']}>
                {categoryProducts.map(cat => (
                    <option>{cat}</option>
                ))}
            </select>
        </div>
    )
}
