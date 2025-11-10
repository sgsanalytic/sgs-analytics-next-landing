"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS } from "../utils/constants/navigation";
import { Menu } from "lucide-react";

export const SgsNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {NAVIGATION_LINKS.map((link) => (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Drawer */}
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menú"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menú</DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col p-4 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <DrawerClose key={link.id} asChild>
                  <Link
                    href={link.href}
                    className="px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-left"
                  >
                    {link.label}
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};
