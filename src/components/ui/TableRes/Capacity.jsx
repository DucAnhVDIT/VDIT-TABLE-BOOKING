import React from 'react';
import { Progress } from "@/components/ui/progress"

const RestaurantCapacity = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Restaurant Capacity</h3>
      <Progress value={percentage} className="mb-2" />
      <p className="text-sm text-gray-600">
        {current} / {total} seats occupied ({percentage.toFixed(1)}%)
      </p>
    </div>
  );
};

export default RestaurantCapacity;