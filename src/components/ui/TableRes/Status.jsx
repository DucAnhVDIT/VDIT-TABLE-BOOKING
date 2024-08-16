import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const statusColors = {
  Confirmed: "bg-blue-100 text-blue-800",
  Seated: "bg-green-100 text-green-800",
  Waiting: "bg-yellow-100 text-yellow-800",
  Completed: "bg-gray-100 text-gray-800",
  Cancelled: "bg-red-100 text-red-800",
};
const StatusDropdown = ({ booking }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        size="sm"
        className={`${statusColors[booking.status]} border-none w-32`}
      >
        {booking.status} <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {Object.keys(statusColors).map((status) => (
        <DropdownMenuItem
          key={status}
          onClick={() => handleStatusChange(booking, status)}
        >
          {status}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default StatusDropdown;
