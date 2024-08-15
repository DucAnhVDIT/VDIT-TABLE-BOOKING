import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FileText,
  Utensils,
  CalendarRange,
  BarChart,
  Settings,
  HelpCircle,
} from "lucide-react";
import NavItem from "./NavItem";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-64 flex flex-col border-r h-full">
      <div className="p-4 flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
          <Utensils className="text-white" size={20} />
        </div>
        <span className="font-bold text-xl">Viet Cafe</span>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-1 p-2">
          <NavItem
            icon={<CalendarRange size={20} />}
            label="Table Reservation"
            isActive={location.pathname === '/table-reservation'}
            onClick={() => handleNavItemClick('/table-reservation')}
          />
          <NavItem 
            icon={<FileText size={20} />} 
            label="Reports" 
            isActive={location.pathname === '/reports'}
            onClick={() => handleNavItemClick('/reports')}
          />
          <NavItem 
            icon={<BarChart size={20} />} 
            label="Restaurant Planner" 
            isActive={location.pathname === '/restaurant-planner'}
            onClick={() => handleNavItemClick('/restaurant-planner')}
          />
          <NavItem 
            icon={<Settings size={20} />} 
            label="General Settings" 
            isActive={location.pathname === '/general-settings'}
            onClick={() => handleNavItemClick('/general-settings')}
          />
          <NavItem 
            icon={<HelpCircle size={20} />} 
            label="Support" 
            isActive={location.pathname === '/support'}
            onClick={() => handleNavItemClick('/support')}
          />
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start space-x-3">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Rebecca Smith"
            />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="font-medium">Rebecca Smith</span>
            <span className="text-xs text-gray-500">Manager</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;