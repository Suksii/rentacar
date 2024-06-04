import React from 'react';
import CardList from "../components/CardList.jsx";

const data = [
    {
        id: 1,
        carModel: "mercedes-benz",
        rating: 4.5,
        price: 200,
        seats: 4,
        gear: "automatic",
        fuel: "diesel",
        type: "suv",
        year: 2021
    },
    {
        id: 2,
        carModel: "audi",
        rating: 4.2,
        price: 150,
        seats: 4,
        gear: "automatic",
        fuel: "diesel",
        type: "suv",
        year: 2020
    },
    {
        id: 3,
        carModel: "bmw",
        rating: 4.7,
        price: 250,
        seats: 4,
        gear: "automatic",
        fuel: "diesel",
        type: "suv",
        year: 2022
    },
    {
        id: 4,
        carModel: "volkswagen",
        rating: 4.0,
        price: 100,
        seats: 4,
        gear: "automatic",
        fuel: "diesel",
        type: "suv",
        year: 2019
    },
    {
        id: 5,
        carModel: "tesla",
        rating: 4.9,
        price: 300,
        seats: 4,
        gear: "automatic",
        fuel: "electric",
        type: "suv",
        year: 2023
    },
    {
        id: 6,
        carModel: "toyota",
        rating: 4.3,
        price: 120,
        seats: 4,
        gear: "automatic",
        fuel: "diesel",
        type: "suv",
        year: 2018
    }
];

const Home = () => {
    return (
        <div className="mx-auto py-10">
            <CardList data={data}/>
        </div>
    );
};

export default Home;