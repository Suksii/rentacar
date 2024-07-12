import React, {useState} from 'react';

const Table = ({header, data}) => {

    const [sortedData, setSortedData] = useState(data);
    const [sortDirection, setSortDirection] = useState({key: "", direction: "asc"});

    const handleSort = (index) => {
        const newDirection = sortDirection.key === index && sortDirection.direction === "asc" ? "desc" : "asc";
        const sorted = [...sortedData].sort((a, b) => {
            if (a[index] < b[index]) {
                return newDirection === "asc" ? -1 : 1;
            }
            if (a[index] > b[index]) {
                return newDirection === "asc" ? 1 : -1;
            }
            return 0;
        });
        setSortedData(sorted);
        setSortDirection({key: index, direction: newDirection});
    }

    return (
        <table className="w-full md:w-[60%] mx-auto">
            <thead className={"bg-gray-600 text-white"}>
            <tr className="border  border-gray-300">
                {header?.map((item, index) => (
                    <th key={index} className="px-4 py-4 text-start border" onClick={() => handleSort(item.index)}>
                        {item.title}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {
                sortedData.length > 0 ? sortedData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {
                            header.map((headerItem, headerIndex) => (
                                <td
                                    key={`${rowIndex}-${headerIndex}`}
                                    className="border border-gray-300 px-4 py-2"
                                    style={{ width: headerItem.index === "image" ? "150px" : "auto" }}
                                >
                                    {headerItem.render ? headerItem.render(row) : row[headerItem.index]}
                                </td>
                            ))
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