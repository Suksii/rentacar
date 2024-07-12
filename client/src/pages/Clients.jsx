import React, {useEffect, useState} from 'react';
import Table from "../components/Table.jsx";
import Loading from "../loading/Loading.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import {useUser} from "../context/UserContext.jsx";

const Clients = () => {

const header = [
        { title: "Name", index: "firstName" },
        { title: "Surname", index: "lastName" },
        { title: "Email", index: "email" },
        { title: "Phone", index: "phoneNumber" },
        { title: "Passport", index: "passportNumber" },
        { title: "Country", index: "country" },
    ];
    const { fetchClients, clients, loading } = useUser();
    const [search, setSearch] = useState("");
    const [filteredClients, setFilteredClients] = useState([]);

    useEffect(() => {

        fetchClients();
    }, []);

    const handleSearch = () => {
        const filtered = clients.filter((client) => {
            return (
                client.email.toLowerCase().includes(search.toLowerCase()) ||
                client.firstName.toLowerCase().includes(search.toLowerCase()) ||
                client.lastName.toLowerCase().includes(search.toLowerCase()) ||
                client.phoneNumber.toString().includes(search.toLowerCase()) ||
                client.passportNumber.toString().includes(search.toLowerCase()) ||
                client.country.toLowerCase().includes(search.toLowerCase())
            );
        });
        setFilteredClients(filtered);
    }

    if (loading) return <Loading />;

    return (
        <div className="w-full flex flex-col gap-10 justify-center items-center">
            <h1 className="text-3xl font-bold">Clients</h1>
            <div className="flex gap-2">
                <Input placeholder="Search for a client"
                       className={"w-full border-2 border-gray-300 rounded-md"}
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                />
                <Button label={"Search"} onClick={handleSearch} className={"bg-blue-800 text-white rounded-md min-w-[120px]"} />
            </div>
                <Table header={header} data={filteredClients.length > 0 ? filteredClients : clients} />
        </div>
    );
};

export default Clients;