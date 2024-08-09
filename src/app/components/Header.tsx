import LocaleSwitcher from "./LocaleSwitcher";
import { Link } from "@/navigation";
import React from "react";

interface LinkProps {
  /** The text to display */
  title: string;
  /** The href to navigate to */
  href: string;
  /** Unique id */
  id: string;
}

type LinkListProps = LinkProps[];

const Header = ({ links }: { links: LinkListProps }) => {
  return (
    <header>
      <nav className="sticky top-0 h-20 w-full bg-sky-900 shadow-lg dark:bg-gray-700">
        <div className="container mx-auto h-full px-4">
          <div className="flex h-full items-center justify-between">
            <ul className="me-6 ms-auto hidden gap-x-6 text-white md:flex">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    className={`link inline-flex items-center py-1 font-sans font-medium`}
                    href={`/${link.href}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
