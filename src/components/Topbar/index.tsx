"use client";

import { SidebarTrigger } from "@/src/components/ui/sidebar";
import { ModeToggle } from "@/src/components/mode-toggle";

export function TopBar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[15]">
            <div className="container mx-auto px-4 flex justify-end items-center h-16 gap-5">
                <SidebarTrigger />
                <ModeToggle />
            </div>
        </div>
    );
}