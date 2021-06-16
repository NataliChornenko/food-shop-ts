import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import iconSearch from '../../../sources/images/searchSearch.svg';
import './styles.component.scss';
import {dataCatalogDishes} from '../../../fake-data/catalog';
import styles from './styles.module.scss'

export const SearchButton = (props: { content: string; action: any }) => {
    const [search, setSearch] = useState('');
    const handleChange = (value: string) => {
        setSearch(value);
    }

    let searchResult: any[] = [];
    if (search.length > 0) {
        searchResult = dataCatalogDishes.filter(function (i) {
            return i.title.toLowerCase().match(search);
        });
    }

    const [listResult, setResult] = useState({
        items: searchResult.slice(0, 5),
        numberProduct: 5,
    })

    const fetchMoreData = () => {
        const numProduct = listResult.numberProduct
        setTimeout(() => {
            setResult({
                items: listResult.items.concat(
                    Array.from(searchResult.slice(numProduct, numProduct + 5))
                ),
                numberProduct: numProduct + 5,
            })
        }, 1500)
    }

    return (
        <div className={'display-flex-row complex-button-search'}>
            <button className="btn btn--search" type="submit">
                <img src={iconSearch} alt={'search'}/>
            </button>
            <input className={'input-search'} placeholder={props.content} type="text" value={search}
                   onChange={(e) => handleChange(e.target.value)}/>
            {searchResult.length > 0 ? <div className={styles['block-result-search-field']}>
                <InfiniteScroll
                    dataLength={searchResult.length}
                    next={fetchMoreData}
                    endMessage={<p>All results</p>}
                    hasMore={listResult.items.length !== searchResult.length}
                    loader={<h4>Loading...</h4>}
                >
                    <div>
                        {searchResult.map((i, index) => (
                            <li key={`search-${index}`}><Link to={'/'}> {i.title}</Link></li>))}
                    </div>
                </InfiniteScroll>
            </div> : null}
        </div>
    )
}
