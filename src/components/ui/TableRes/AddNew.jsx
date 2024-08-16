import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AddNew({ onClose, isOpen }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>New Booking</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Input placeholder="Mobile" />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" type="email" />
          <div className="grid grid-cols-2 gap-4">
            <Input type="date" defaultValue="2024-08-16" />
            <Input type="time" defaultValue="10:30" />
          </div>
          <Select defaultValue="1">
            <SelectTrigger>
              <SelectValue placeholder="Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 people</SelectItem>
              <SelectItem value="2">2 people</SelectItem>
              <SelectItem value="3">3 people</SelectItem>
              <SelectItem value="4">4+ people</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="Guest Request" />
          <Textarea placeholder="Restaurant Notes" />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button>Submit</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AddNew;
