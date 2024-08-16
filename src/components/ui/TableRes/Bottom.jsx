import React from 'react';
import RestaurantCapacity from './Capacity';
import NotesSection from './Notes';
import WaitingList from './WaitingList';


const BottomSection = ({ capacity, waitingCustomers }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <RestaurantCapacity current={capacity.current} total={capacity.total} />
      <WaitingList waitingCustomers={waitingCustomers} />
      <NotesSection />
    </div>
  );
};

export default BottomSection;