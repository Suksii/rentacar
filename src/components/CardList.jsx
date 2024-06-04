import React from 'react';
import Card from "./Card.jsx";
import cardCar from "../assets/card-car.jpg";

const CardList = ({data}) => {
    return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-evenly">
            {data.map((car) => (
                <Card
                    key={car.id}
                    srcImg={cardCar}
                    carModel={car?.carModel}
                    year={car?.year}
                    rating={car?.rating}
                    price={car?.price}
                    seats={car?.seats}
                    gear={car?.gear}
                    fuel={car?.fuel}
                    type={car?.type}
                />
            ))}
        </div>
    );
};

export default CardList;