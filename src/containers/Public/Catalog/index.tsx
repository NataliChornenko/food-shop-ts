import React from 'react'
import {Catalog} from './FoodCatalog'
import {Order} from '../Order'
import styles from './styles.module.scss'

export const CatalogPage = () => {
    return (
        <div className={styles['display-flex-row']}>
            <main className={styles['catalog-content']}>
                <Catalog/>
            </main>
            <aside
                className={[
                    styles['order-content'],
                    styles['display-web'],
                    styles['display-order-block'],
                ].join('')}
            >
                <Order/>
            </aside>
        </div>
    )
}
