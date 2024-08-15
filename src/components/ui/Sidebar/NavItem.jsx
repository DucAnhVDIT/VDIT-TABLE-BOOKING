import React from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const NavItem = ({ icon, label, isActive, onClick, isExpanded }) => {
  const content = (
    <Button 
      variant={isActive ? "secondary" : "ghost"}
      className={`w-full ${isExpanded ? 'justify-start' : 'justify-center'} ${isActive ? 'bg-primary/10 text-primary' : ''}`}
      onClick={onClick}
    >
      {icon}
      {isExpanded && <span className="ml-3">{label}</span>}
    </Button>
  );

  if (!isExpanded) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {content}
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
};

export default NavItem;