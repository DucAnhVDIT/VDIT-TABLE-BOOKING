import React from "react";
import { Button } from "../button";
import { ChevronDown } from "lucide-react";

const NavItem = ({ icon, label, badge, hasSubmenu, isActive, onClick }) => {
  return (
    <div>
      <Button 
      variant="ghost"
      className={`w-full justify-start text-sm font-medium transition-colors hover:text-primary hover:bg-primary/10 ${
        isActive 
          ? 'text-primary bg-primary/10' 
          : 'text-muted-foreground'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3 flex-1 text-left">{label}</span>
      {badge && (
        <span className="ml-auto bg-red-100 text-red-600 rounded-full px-2 py-0.5 text-xs">
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronDown size={16} className="ml-auto" />}
    </Button>
    </div>
  );
};

export default NavItem;
