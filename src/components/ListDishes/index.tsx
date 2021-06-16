import React, {useState} from 'react';
import {CardOrder} from '../CardDishes/CardOrder';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './styles.module.scss';
import {orderData} from '../../fake-data/fake-data';

export const OrderList = () => {
    const [listOrder, setList] = useState({
        items: orderData.slice(0, 5),
        numberProduct: 5,
    })
    const fetchMoreData = () => {
        const numProduct = listOrder.numberProduct
        setTimeout(() => {
            setList({
                items: listOrder.items.concat(
                    Array.from(orderData.slice(numProduct, numProduct + 5))
                ),
                numberProduct: numProduct + 5,
            })
        }, 1500)
    }
    return (
        <div
            className={[styles['wrapper'], styles['display-flex-column']].join(' ')}
        >
            <div>
                <InfiniteScroll
                    dataLength={orderData.length}
                    next={fetchMoreData}
                    endMessage={<p>At the moment it all dishes in you cart.</p>}
                    hasMore={listOrder.items.length !== orderData.length}
                    loader={<h4>Loading...</h4>}
                >
                    <div>
                        {listOrder.items.map((order: any, index) => (
                            <CardOrder order={order} key={`order-${index}`}/>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}
