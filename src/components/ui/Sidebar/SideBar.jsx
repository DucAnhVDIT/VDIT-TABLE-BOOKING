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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import NavItem from "./NavItem";

const SidebBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavItemClick = (path) => {
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${isExpanded ? 'w-64' : 'w-16'} flex flex-col border-r h-full transition-all duration-300 ease-in-out relative`}>
      <div className={`p-4 flex items-center ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        {isExpanded ? (
          <>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Utensils className="text-white" size={20} />
              </div>
              <span className="font-bold text-xl">Viet Cafe</span>
            </div>
          </>
        ) : (
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Utensils className="text-white" size={20} />
          </div>
        )}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-5 bg-background border rounded-full"
        onClick={toggleSidebar}
      >
        {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </Button>
      <ScrollArea className="flex-1">
        <nav className={`space-y-1 p-2 ${isExpanded ? '' : 'flex flex-col items-center'}`}>
          <NavItem
            icon={<CalendarRange size={20} />}
            label="Table Reservation"
            isActive={location.pathname === '/table-reservation'}
            onClick={() => handleNavItemClick('/table-reservation')}
            isExpanded={isExpanded}
          />
          <NavItem
            icon={<FileText size={20} />}
            label="Reports"
            isActive={location.pathname === '/reports'}
            onClick={() => handleNavItemClick('/reports')}
            isExpanded={isExpanded}
          />
          <NavItem
            icon={<BarChart size={20} />}
            label="Restaurant Planner"
            isActive={location.pathname === '/restaurant-planner'}
            onClick={() => handleNavItemClick('/restaurant-planner')}
            isExpanded={isExpanded}
          />
          <NavItem
            icon={<Settings size={20} />}
            label="General Settings"
            isActive={location.pathname === '/general-settings'}
            onClick={() => handleNavItemClick('/general-settings')}
            isExpanded={isExpanded}
          />
          <NavItem
            icon={<HelpCircle size={20} />}
            label="Support"
            isActive={location.pathname === '/support'}
            onClick={() => handleNavItemClick('/support')}
            isExpanded={isExpanded}
          />
        </nav>
      </ScrollArea>
      <div className={`p-4 border-t ${isExpanded ? '' : 'flex justify-center'}`}>
        <Button variant="ghost" className={`w-full justify-start space-x-3 ${isExpanded ? '' : 'p-0'}`}>
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Rebecca Smith"
            />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          {isExpanded && (
            <div className="flex flex-col items-start">
              <span className="font-medium">Duc Anh</span>
              <span className="text-xs text-gray-500">Manager</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SidebBar;