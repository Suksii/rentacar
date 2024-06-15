import React from 'react';
import Table from "../components/Table.jsx";

const AdminBoard = ({data, header}) => {
    return (
        <div className="flex justify-center items-center w-full mx-auto">
            <Table data={data} header={header}/>
        </div>
    );
};

export default AdminBoard;