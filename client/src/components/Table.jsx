import React from 'react';

const Table = ({header, data}) => {
    return (
        <table className="w-full md:w-[60%] mx-auto">
            <thead className={"bg-gray-600 text-white"}>
            <tr className="border  border-gray-300">
                {header?.map((item, index) => (
                    <th key={index} className="px-4 py-4 text-start border">{item?.title}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {
                data.length > 0 ? data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {
                            header.map((headerItem, headerIndex) => {
                                return <td key={`${rowIndex}-${headerIndex}`} className="border border-gray-300 px-4 py-2" style={{ width: headerItem.index === "image" ? "150px" : "auto" }}>
                                    {headerItem.render ? headerItem.render(row) : row[headerItem.index]}
                                </td>
                            })
                        }
                    </tr>
                )) : (
                    <tr className="border border-black">
                        <td colSpan={header.length} className="text-center py-10 text-2xl">No data available</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
};

export default Table;