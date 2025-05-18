import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header
      role="banner"
      className="fixed top-0 left-0 z-10 h-16 w-full shadow-md backdrop-blur-md"
    >
      <div className="flex h-full w-full items-center px-4 md:justify-between md:px-8">
        {/* Logo */}
        <Link href="#" className="text-primary hidden text-2xl md:block">
          {" "}
          {"<DW/>"}{" "}
        </Link>

        {/* Menu */}
        <div id="mainmenu" className="w-full md:w-3/4">
          <nav role="navigation" className="text-primary flex justify-between">
            <Button variant="link" role="button">
              <Link href="#" role="link">
                Home
              </Link>
            </Button>
            <Button variant="link" role="button">
              <Link href="#projects" role="link">
                Projects
              </Link>
            </Button>
            <Button variant="link" role="button">
              <Link href="#skills" role="link">
                Skills
              </Link>
            </Button>
            <Button variant="link" role="button">
              <Link href="#contact" role="link">
                Contact
              </Link>
            </Button>
            {/* Themetoggle */}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
