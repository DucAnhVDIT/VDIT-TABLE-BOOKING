
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

function TableReservation ({ isActive, onClick }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFloor, setSelectedFloor] = useState('Main Floor');

  const tables = [
    { id: '8', shape: 'rectangle', size: 'large' },
    { id: '6', shape: 'rectangle', size: 'medium' },
    { id: '4', shape: 'rectangle', size: 'small' },
    { id: '4A', shape: 'rectangle', size: 'small' },
    { id: '1', shape: 'square', size: 'small' },
    { id: 'S2', shape: 'circle', size: 'small' },
    { id: 'T5', shape: 'circle', size: 'medium' },
    { id: '231234', shape: 'circle', size: 'medium' },
    { id: '6B', shape: 'rectangle', size: 'medium' },
    { id: '6A', shape: 'rectangle', size: 'medium' },
    { id: 'S4', shape: 'circle', size: 'medium' },
    { id: 'S6', shape: 'circle', size: 'large' },
    { id: 'VIP', shape: 'circle', size: 'large' },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex space-x-4">
        <div className="w-2/3">
          <Tabs value={selectedFloor} onValueChange={setSelectedFloor}>
            <TabsList>
              <TabsTrigger value="Main Floor">Main Floor</TabsTrigger>
              <TabsTrigger value="Second Floor">Second Floor</TabsTrigger>
            </TabsList>
            <TabsContent value="Main Floor" className="mt-4">
              <div className="bg-yellow-100 p-4 rounded-lg relative" style={{ height: '500px' }}>
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className={`absolute bg-gray-300 flex items-center justify-center 
                      ${table.shape === 'circle' ? 'rounded-full' : 'rounded-md'}
                      ${table.shape === 'rectangle' && table.size === 'large' ? 'w-32 h-16' : ''}
                      ${table.shape === 'rectangle' && table.size === 'medium' ? 'w-24 h-12' : ''}
                      ${table.shape === 'rectangle' && table.size === 'small' ? 'w-16 h-12' : ''}
                      ${table.shape === 'square' ? 'w-12 h-12' : ''}
                      ${table.shape === 'circle' && table.size === 'large' ? 'w-24 h-24' : ''}
                      ${table.shape === 'circle' && table.size === 'medium' ? 'w-16 h-16' : ''}
                      ${table.shape === 'circle' && table.size === 'small' ? 'w-12 h-12' : ''}
                    `}
                    style={{
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 80}%`,
                    }}
                  >
                    {table.id}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Second Floor">
              <p>Second Floor layout here</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-1/3">
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <h2 className="font-bold">Total Booking: 0</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>#</TableHead>
                <TableHead>(£)</TableHead>
                <TableHead>Tbl</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Add table rows here when you have reservation data */}
            </TableBody>
          </Table>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button size="sm">Seat</Button>
            <Button size="sm">Lock</Button>
            <Button size="sm">Pre Assign</Button>
            <Button size="sm">Walk In</Button>
            <Button size="sm">Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableReservation;
