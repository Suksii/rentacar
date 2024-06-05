import React from 'react';
import Card from "./Card.jsx";

const CardList = ({data}) => {
    return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-evenly">
            {data.map((car) => (
                <Card
                    key={car.id}
                    srcImg={car.image}
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