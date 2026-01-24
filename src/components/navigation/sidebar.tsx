import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NaxaLogo from "@/assets/images/naxa_logo.png";
import { ChevronDown, TextAlignJustify } from "lucide-react";
import type { MenuItemProps } from "./navbar";
import { useState } from "react";
import { Button } from "../ui/button";

const Sidebar = ({ menuItems }: { menuItems: MenuItemProps[] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    if (isDropdownOpen === idx) {
      setIsDropdownOpen(null);
    } else {
      setIsDropdownOpen(idx);
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <TextAlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <img src={NaxaLogo} alt="Naxa Logo" className="h-8" />
          </SheetTitle>
          <SheetDescription>Navigate through the sections</SheetDescription>
        </SheetHeader>
        <nav>
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, idx) => (
              <li key={idx} className="border-b pb-2 px-4">
                <a
                  href={item.link}
                  className="text-base font-medium flex items-center justify-between"
                  onClick={() => handleClick(idx)}
                >
                  {item.name}
                  {item.dropdownItems && (
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-200 ease-out ${
                        isDropdownOpen === idx ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
                {item.dropdownItems && (
                  <ul
                    className={`mt-2 pl-4 space-y-2 overflow-hidden transition-[max-height,opacity] duration-900 ease-in-out ${
                      isDropdownOpen === idx
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.dropdownItems.map((dropdownItem, _idx) => (
                      <li key={_idx} className="list-disc mx-4">
                        <a
                          href={dropdownItem.link}
                          className="text-base text-foreground"
                        >
                          {dropdownItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="ghost" size="lg">
              Let's Talk
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
