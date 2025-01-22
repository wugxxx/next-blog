"use client"

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { CategoriesDropdown } from "./categories-dropdown";
import { SearchDialog } from "./search-dialog";
import { useState } from "react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="h-16 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Archer&apos;s
      </Link>
      
      <nav className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <CategoriesDropdown />
        <Link href="/todos">Todos</Link>
        <Link href="/about">About</Link>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowSearch(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </Button>
          <ModeToggle />
        </div>
      </nav>

      <SearchDialog 
        open={showSearch} 
        onOpenChange={setShowSearch}
      />
    </div>
  );
} 