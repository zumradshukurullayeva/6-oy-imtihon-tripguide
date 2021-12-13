import React from 'react'
import SearchCard from "../components/search/SearchCard";
import GetOur from "../components/GetOur";
import SearchCardTop from '../components/search/SearchCardTop';

const Search = () => {
    return (
        <div className="search-wrapper">
            <SearchCardTop />
            <SearchCard />
            <GetOur />
        </div>
    )
}

export default Search
