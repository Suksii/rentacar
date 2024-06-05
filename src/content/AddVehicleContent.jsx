import React from 'react';

const AddVehicleContent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-semibold">Add Vehicle</h1>
            <form className="flex flex-col gap-5 w-1/3">
                <input type="text" placeholder="Car Model" className="p-3 border border-gray-300 rounded-md"/>
                <input type="number" placeholder="Year" className="p-3 border border-gray-300 rounded-md"/>
                <input type="number" placeholder="Price" className="p-3 border border-gray-300 rounded-md"/>
                <input type="text" placeholder="Type" className="p-3 border border-gray-300 rounded-md"/>
                <input type="number" placeholder="Seats" className="p-3 border border-gray-300 rounded-md"/>
                <input type="text" placeholder="Gear" className="p-3 border border-gray-300 rounded-md"/>
                <input type="text" placeholder="Fuel" className="p-3 border border-gray-300 rounded-md"/>
                <input type="text" placeholder="Image URL" className="p-3 border border-gray-300 rounded-md"/>
                <button className="p-3 bg-gray-900 text-white font-semibold rounded-md">Add Vehicle</button>
            </form>
        </div>
    );
};

export default AddVehicleContent;