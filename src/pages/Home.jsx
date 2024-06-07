import React from 'react';
import CardList from "../components/CardList.jsx";
import car from "../assets/car.jpg";


const Home = ({data}) => {
    return (
        <div className="w-full mx-auto">
            <div className="relative">
                <img src={car} alt="car" className="w-full h-auto max-h-[600px] object-cover object-center"/>
                <div className="absolute bottom-0 translate-y-1/2 w-full h-[75px] bg-white rounded-t-[50%]"></div>
            </div>
            <div className="py-10">
                <h3 className="text-xl font-semibold text-center uppercase leading-5">Check out</h3>
                <h1 className="text-4xl text-red-500 font-semibold text-center leading-5">Our Cars</h1>
            </div>
            <div className="flex justify-center py-10">
                <CardList data={data}/>
            </div>
        </div>
    );
};

export default Home;