import React from 'react';
import Banner from "../components/Banner";
import Fillter from "../components/Fillter";
import TopOur from "../components/TopOur";
import Destinations from "../components/Destinations";
import Explore from "../components/Explore";
import Travel from "../components/Travel";
import GetOur from "../components/GetOur";
import Trending from "../components/Trending";
import BestSearch from "../components/BestSearch";

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <Fillter />
            <BestSearch />
            <Destinations />
            <TopOur />
            <Explore />
            <Trending />
            <Travel />
            <GetOur />
            

        </div>
    );
}

export default Home;
