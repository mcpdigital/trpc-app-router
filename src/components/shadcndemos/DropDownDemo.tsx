import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DropDownDemo = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-black border p-1 rounded border-gray-400">
          My Apps
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Apps</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GPT</DropdownMenuItem>
          <DropdownMenuItem>Github</DropdownMenuItem>
          <DropdownMenuItem>Llama</DropdownMenuItem>
          <DropdownMenuItem>Twitter</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
