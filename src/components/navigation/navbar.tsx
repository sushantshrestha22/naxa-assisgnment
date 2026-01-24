import { Container } from "../custom/container";
import NaxaLogo from "@/assets/images/naxa_logo.png";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import Sidebar from "./sidebar";

export interface MenuItemProps {
  name: string;
  link: string;
  dropdownItems?: MenuItemProps[];
}

const Navbar = () => {
  const menuItems: MenuItemProps[] = [
    { name: "About Us", link: "#" },
    { name: "Services", link: "#" },
    {
      name: "Portfolio",
      link: "#",
      dropdownItems: [
        { name: "General", link: "#" },
        { name: "International", link: "#" },
      ],
    },
    {
      name: "Company",
      link: "#",
      dropdownItems: [
        { name: "Team", link: "#" },
        { name: "Work with us", link: "#" },
        { name: "Awards & Achievements", link: "#" },
      ],
    },
    {
      name: "Our Initiatives",
      link: "#",
      dropdownItems: [
        { name: "Product & Innovation", link: "#" },
        { name: "GeoAI", link: "#" },
      ],
    },
    {
      name: "Events & Media",
      link: "#",
      dropdownItems: [
        { name: "Events", link: "#" },
        { name: "Media", link: "#" },
        { name: "Publications", link: "#" },
        { name: "Blog", link: "#" },
      ],
    },
  ];

  return (
    <Container className="bg-transparent">
      <nav className="flex justify-between items-center py-4">
        <img src={NaxaLogo} alt="Naxa Logo" className="h-8" />
        <ul className="flex space-x-8 h-full  max-lg:hidden">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group h-10 place-content-center"
            >
              <a
                href={item.link}
                className="hover:text-primary font-medium  text-sm lg:text-base flex items-center gap-1 h-full"
              >
                {item.name}
                {item.dropdownItems && (
                  <IoMdArrowDropdown className="group-hover:rotate-180" />
                )}
              </a>
              {item.dropdownItems && (
                <ul className="absolute z-10 bg-white shadow-md rounded-sm  py-2 hidden  group-hover:block min-w-50">
                  {item.dropdownItems.map((dropdownItem, dIndex) => (
                    <li
                      key={dIndex}
                      className="px-4 py-2 whitespace-nowrap hover:bg-accent"
                    >
                      <a href={dropdownItem.link} className=" text-foreground">
                        {dropdownItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Button variant="ghost" size="lg" >
          Let's Talk
        </Button>
        <section className="lg:hidden">
          <Sidebar menuItems={menuItems} />
        </section>
      </nav>
    </Container>
  );
};

export default Navbar;
