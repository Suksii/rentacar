import React, {useEffect, useState} from 'react';
import Table from "../components/Table.jsx";
import axios from "axios";

const Clients = () => {

const header = [
        { title: "Name", index: "firstName" },
        { title: "Surname", index: "lastName" },
        { title: "Email", index: "email" },
        { title: "Phone", index: "phoneNumber" },
        { title: "Passport", index: "passportNumber" },
        { title: "Country", index: "country" }
    ];

    const [clients, setClients] = useState([])


    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('/users');
                setClients(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchClients();
    }, []);

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={clients}/>
        </div>
    );
};

export default Clients;