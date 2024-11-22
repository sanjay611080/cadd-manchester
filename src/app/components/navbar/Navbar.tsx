import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to hide/show the logo
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 50 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop <= 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white text-black p-4 fixed top-0 left-0 w-full z-50">
      {/* Container for logo and hamburger button */}
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex justify-start md:justify-center w-full">
          <Link href="/">
            <Image
              src="/logo.svg" // Adjust the path to your logo file
              alt="Cadd Manchester Logo"
              width={247} // Set width for the logo
              height={103} // Set height for the logo
              className={`logo ${isScrolled ? "hidden" : ""} transition-all duration-300 w-32 md:w-[247px]`}
            />
          </Link>
        </div>

        {/* Hamburger Menu Button (Visible only on small screens) */}
        <button
          className="block md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
        </button>
      </div>

      {/* Navigation Links (For Desktop) */}
      <ul className="hidden md:flex justify-center space-x-8 mt-[54px] text-black">
        <li>
          <Link href="/">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice text-black py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/Course">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice text-black py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300">
              Course
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/Exam">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice text-black py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300">
              Exam
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/Blog">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice text-black py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300">
              Blog
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/About">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice text-black py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300">
              About Us
            </span>
          </Link>
        </li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white text-black p-4 shadow-lg">
          <button
            className="block w-full text-right mb-4 text-xl"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          <ul>
            <li>
              <Link href="/">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px]  underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/Course">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px]  underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Courses
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/Exam">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px]  underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Exam
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/Blog">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px]  underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/About">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px]  underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  About Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
