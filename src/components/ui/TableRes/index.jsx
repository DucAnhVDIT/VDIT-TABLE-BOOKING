import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  Menu,
  ChevronDown,
  CalendarIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function TableReservation({ isActive, onClick }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFloor, setSelectedFloor] = useState("Main Floor");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tables = [
    { id: "8", shape: "rectangle", size: "large" },
    { id: "6", shape: "rectangle", size: "medium" },
    { id: "4", shape: "rectangle", size: "small" },
    { id: "4A", shape: "rectangle", size: "small" },
    { id: "1", shape: "square", size: "small" },
    { id: "S2", shape: "circle", size: "small" },
    { id: "T5", shape: "circle", size: "medium" },
    {
      id: "231234",
      shape: "circle",
      size: "medium",
    },
    { id: "6B", shape: "rectangle", size: "medium" },
    { id: "6A", shape: "rectangle", size: "medium" },
    { id: "S4", shape: "circle", size: "medium" },
    { id: "S6", shape: "circle", size: "large" },
    { id: "VIP", shape: "circle", size: "large" },
  ];

  const renderTable = (table) => {
    const tableClasses = `absolute bg-gray-300 flex items-center justify-center text-xs
      ${table.shape === "circle" ? "rounded-full" : "rounded-md"}
      ${
        table.shape === "rectangle" && table.size === "large" ? "w-40 h-20" : ""
      }
      ${
        table.shape === "rectangle" && table.size === "medium"
          ? "w-32 h-16"
          : ""
      }
      ${
        table.shape === "rectangle" && table.size === "small" ? "w-24 h-12" : ""
      }
      ${table.shape === "square" ? "w-16 h-16" : ""}
      ${table.shape === "circle" && table.size === "large" ? "w-32 h-32" : ""}
      ${table.shape === "circle" && table.size === "medium" ? "w-24 h-24" : ""}
      ${table.shape === "circle" && table.size === "small" ? "w-16 h-16" : ""}
    `;

    return (
      <div
        key={table.id}
        className={tableClasses}
        style={{ left: `${table.x}px`, top: `${table.y}px` }}
      >
        {table.id}
      </div>
    );
  };

  const bookings = [
    {
      time: "18:00",
      name: "John Doe",
      guests: 2,
      spend: "£50",
      table: "T1",
      status: "Confirmed",
    },
    {
      time: "19:30",
      name: "Jane Smith",
      guests: 4,
      spend: "£120",
      table: "T3",
      status: "Seated",
    },
    {
      time: "20:00",
      name: "Mike Johnson",
      guests: 3,
      spend: "£85",
      table: "T2",
      status: "Waiting",
    },
    {
      time: "20:30",
      name: "Emily Brown",
      guests: 2,
      spend: "£70",
      table: "T5",
      status: "Completed",
    },
  ];

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

  return (
    <div className="p-2 md:p-4 mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        {/* Floor Plan Section */}
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <Tabs value={selectedFloor} onValueChange={setSelectedFloor}>
            <TabsList className="w-full">
              <TabsTrigger value="Main Floor" className="flex-1">
                Main Floor
              </TabsTrigger>
              <TabsTrigger value="Second Floor" className="flex-1">
                Second Floor
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Main Floor" className="mt-4">
              <div
                className="bg-yellow-100 p-2 md:p-4 rounded-lg relative overflow-auto"
                style={{ height: "500px", minWidth: "300px" }}
              >
                {tables.map(renderTable)}
              </div>
            </TabsContent>
            <TabsContent value="Second Floor">
              <p>Second Floor</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bookings Section */}
        <div className="w-full lg:w-1/2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal mb-4"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <div className="bg-primary p-4 rounded-lg mb-4 text-white flex justify-between items-center">
            <h2 className="font-bold">Total Booking: {bookings.length}</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile view for bookings */}
          <div className="lg:hidden">
            {isMobileMenuOpen &&
              bookings.map((booking, index) => (
                <div key={index} className="bg-white p-2 mb-2 rounded shadow">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{booking.time}</span>
                    <span>{booking.table}</span>
                  </div>
                  <div>
                    {booking.name} - {booking.guests} guests
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>{booking.spend}</span>
                    <StatusDropdown booking={booking} />
                  </div>
                  <div className="flex justify-end space-x-2 mt-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          {/* Desktop view for bookings */}
          <div className="hidden lg:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>#</TableHead>
                  <TableHead>(£)</TableHead>
                  <TableHead>Tbl</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking, index) => (
                  <TableRow key={index}>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>{booking.name}</TableCell>
                    <TableCell>{booking.guests}</TableCell>
                    <TableCell>{booking.spend}</TableCell>
                    <TableCell>{booking.table}</TableCell>
                    <TableCell>
                      <StatusDropdown booking={booking} />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4">
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableReservation;
