// components/DataTable.tsx
import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-gray-800 text-white">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {/* Replace with your actual column names */}
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Username</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-700" : ""}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.username}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
