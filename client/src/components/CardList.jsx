import React from 'react';
import Card from "./Card.jsx";

const CardList = ({data}) => {

    const displayRating = (rating) => {
        if(rating % 1 === 0) return rating.toString()
        return rating.toFixed(1)
    }

    return (
        <div className="w-full md:w-[90%] flex flex-wrap gap-12 justify-center">
            {data.map((car) => (
                <Card
                    key={car._id}
                    carID={car._id}
                    srcImg={car.image}
                    carModel={car?.model === "Volkswagen" ? "VW" : car?.model}
                    carName={car?.name}
                    year={car?.year}
                    rating={displayRating(car?.averageRating)}
                    price={car?.price}
                    seats={car?.seats}
                    gear={car?.transmission}
                    fuel={car?.fuelType}
                    type={car?.type ? car?.type : "SUV"}
                />
            ))}
        </div>
    );
};

export default CardList;