import React from 'react';
import iconSearch from '../../../sources/images/searchSearch.svg';
import './styles.component.scss';

export const SearchButton = (props: { content: string; action: any }) => {
    return (
        <div className={'display-flex-row complex-button-search'}>
            <button className="btn btn--search" type="submit">
                <img src={iconSearch} alt={'search'}/>
            </button>
            <input className={'input-search'} placeholder={props.content}/>
        </div>
    )
}
