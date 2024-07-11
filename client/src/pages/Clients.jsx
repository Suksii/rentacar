import React, {useEffect, useState} from 'react';
import Table from "../components/Table.jsx";
import axios from "axios";
import Loading from "../loading/Loading.jsx";

const Clients = () => {

const header = [
        { title: "Name", index: "firstName" },
        { title: "Surname", index: "lastName" },
        { title: "Email", index: "email" },
        { title: "Phone", index: "phoneNumber" },
        { title: "Passport", index: "passportNumber" },
        { title: "Country", index: "country" },
    ];

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchClients = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/users');
                setClients(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchClients();
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={clients}/>
        </div>
    );
};

export default Clients;