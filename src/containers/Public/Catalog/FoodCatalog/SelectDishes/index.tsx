import React from 'react'
import styles from '../../FoodCatalog/Сategories/styles.module.scss'
export const SelectDishes = () => {
  return (
    <select className={styles['catalog-select']}>
      <option>Dine in</option>
      <option>To go</option>
      <option>Delivery</option>
    </select>
  )
}
