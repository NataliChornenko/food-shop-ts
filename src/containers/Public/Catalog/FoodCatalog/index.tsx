import React, {useEffect, useState} from 'react';
import {CardDish} from '../../../../components/CardDishes/CardCatalog';
import InfiniteScroll from 'react-infinite-scroll-component';
import {CategoriesDishes} from './Сategories';
import {SelectDishes} from './SelectDishes';
import styles from './styles.module.scss';
import {MobileCategoriesDishes} from './Сategories/MobileCategories';
import {dataCatalogDishes} from '../../../../fake-data/catalog';

export const Catalog = () => {
    const getDataToCategory = (idCategory: number) => {
        return dataCatalogDishes.filter((dish: any) => dish.parentCategory === idCategory);
    }

    const [category, setCategory] = useState({category: 0, dataCategory: getDataToCategory(0)});
    const [listDishes, setList] = useState({
        items: category.dataCategory.slice(0, 10),
        numberProduct: 10
    })

    const chooseCategory = (cat: number) => {
        setCategory(() => ({category: cat, dataCategory: getDataToCategory(cat)}));
        setList(() => ({numberProduct: 10, items: getDataToCategory(cat).slice(0, 10)}))
        console.log(listDishes);
    }

    const backToTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80)
            setTimeout(backToTop, 0)
        }
    }

    useEffect(() => {
        //getAllData
    }, [])

    //infinite scroll
    const fetchMoreData = () => {
        const numProduct = listDishes.numberProduct
        setTimeout(() => {
            setList({
                items: listDishes.items.concat(
                    category.dataCategory.slice(numProduct, numProduct + 10)
                ),
                numberProduct: numProduct + 10,
            })
        }, 1500)
    }
    return (
        <div className={styles['catalog-shop']}>
            <div className={styles['display-categories']}>
                <CategoriesDishes active={category.category} chooseCategory={chooseCategory}/>
            </div>
            <div className={styles['header-catalog-nav']}>
                <div>
                    <h2>Choose dishes</h2>
                </div>
                <div>
                    <SelectDishes/>
                </div>
                <div className={styles['mobile-categories']}>
                    <MobileCategoriesDishes active={category.category} chooseCategory={chooseCategory}/>
                </div>
            </div>
            <InfiniteScroll
                dataLength={category.dataCategory.length}
                next={fetchMoreData}
                hasMore={listDishes.items.length !== category.dataCategory.length}
                endMessage={
                    <p>All dishes</p>
                }
                loader={<h4>Loading...</h4>}
            >
                <div className={styles['catalog']}>
                    {listDishes.items.map((food: any, index: any) => (
                        <CardDish food={food} key={`card-dish${index}`}/>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}
