import React, {useState} from 'react';
import {CardDish} from '../../../../components/CardDishes/CardCatalog';
import {ICardFood} from '../../../../models/shop';
import InfiniteScroll from 'react-infinite-scroll-component';
import {CategoriesDishes} from './Сategories';
import {SelectDishes} from './SelectDishes';
import {CatalogFoods} from '../../../../fake-data/fake-data';

import styles from './styles.module.scss';
import {MobileCategoriesDishes} from './Сategories/MobileCategories';

export const Catalog = () => {
    const [listDishes, setList] = useState({
        items: CatalogFoods.slice(0, 10),
        numberProduct: 10,
    })
    const [category, setCategory] = useState(0)

    const chooseCategory = (cat: number) => {
        setCategory(cat)
    }

    const backToTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80)
            setTimeout(backToTop, 0)
        }
    }

    const fetchMoreData = () => {
        const numProduct = listDishes.numberProduct
        setTimeout(() => {
            setList({
                items: listDishes.items.concat(
                    CatalogFoods.slice(numProduct, numProduct + 10)
                ),
                numberProduct: numProduct + 10,
            })
        }, 1500)
    }
    return (
        <div className={styles['catalog-shop']}>
            <div className={styles['display-categories']}>
                <CategoriesDishes active={category} chooseCategory={chooseCategory}/>
            </div>
            <div className={styles['header-catalog-nav']}>
                <div>
                    <h2>Choose dishes</h2>
                </div>
                <div>
                    <SelectDishes/>
                </div>
                <div className={styles['mobile-categories']}>
                    <MobileCategoriesDishes/>
                </div>
            </div>
            <InfiniteScroll
                dataLength={CatalogFoods.length}
                next={fetchMoreData}
                hasMore={listDishes.items.length !== CatalogFoods.length}
                endMessage={
                    <button
                        onClick={backToTop}
                        className={
                            styles[
                                'fa fa-arrow-up cart-button input-add-search search-button'
                                ]
                        }
                    >
                        Up
                    </button>
                }
                loader={<h4>Loading...</h4>}
            >
                <div className={styles['catalog']}>
                    {listDishes.items.map((food: ICardFood, index) => (
                        <CardDish food={food} key={`card-dish${index}`}/>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}
