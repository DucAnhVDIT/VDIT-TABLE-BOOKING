import React from 'react';
import { Button } from "@/components/ui/button"

const WaitingList = ({ waitingCustomers }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Waiting List</h3>
      {waitingCustomers.length > 0 ? (
        <ul className="space-y-2">
          {waitingCustomers.map((customer, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{customer.name} - {customer.partySize} people</span>
              <Button size="sm">Seat</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-600">No customers waiting</p>
      )}
      <Button className="mt-4 w-full">Add to Waiting List</Button>
    </div>
  );
};

export default WaitingList;