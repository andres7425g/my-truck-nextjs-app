import React from 'react';
import { Trucks } from '@/model/trucks.model';

interface TableProps {
  trucks: Trucks[];
}

const Table: React.FC<TableProps> = ({ trucks }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {Object.keys(trucks[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {trucks.map((truck) => (
          <tr key={truck.locationid}>
            {Object.keys(truck).map((key, index) => (
              <td
                key={index}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {truck[key as keyof Trucks]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
