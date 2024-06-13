import React from 'react';
import Table from "../components/Table.jsx";

const Clients = () => {

const header = [
        { title: "Name", index: "name" },
        { title: "Surname", index: "surname" },
        { title: "Email", index: "email" },
        { title: "Phone", index: "phone" },
        { title: "Passport", index: "passport" },
        { title: "Country", index: "country" }
    ];

    const data = [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            email: "john@doe.com",
            phone: "+123456789",
            passport: "123456789",
            country: "USA"
        },
        {
            id: 2,
            name: "Jane",
            surname: "Doe",
            email: "jane@doe.com",
            phone: "+987654321",
            passport: "987654321",
            country: "UK"
        },
        {
            id: 3,
            name: "Michael",
            surname: "Smith",
            email: "michael@smith.com",
            phone: "+123456789",
            passport: "123456789",
            country: "USA"
        }
        ];

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={data}/>
        </div>
    );
};

export default Clients;