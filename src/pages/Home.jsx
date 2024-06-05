import React from 'react';
import CardList from "../components/CardList.jsx";
import Table from "../components/Table.jsx";


const Home = ({data}) => {
    return (
        <div className="mx-auto py-10">
            <CardList data={data}/>
        </div>
    );
};

export default Home;