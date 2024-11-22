import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white text-black p-4 fixed top-0 left-0 w-full z-50 md:h-[150px] h-[60px]">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex justify-start md:justify-center w-full mx-[10px]">
          {/* Logo for Desktop (hidden on mobile) */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Cadd Manchester Logo"
              width={247} // Set width for the logo
              height={103} // Set height for the logo
              className={`logo ${isScrolled ? "hidden" : ""} transition-all duration-300 w-32 md:w-[247px] hidden md:block`} // Hidden on mobile
            />
          </Link>

          {/* Logo for Mobile (hidden on desktop) */}
          <Link href="/">
            <Image
              src="/logo-mobile.svg" // Mobile-specific logo
              alt="Cadd Manchester Mobile Logo"
              width={150} // Adjust the width for mobile
              height={60} // Adjust the height for mobile
              className="md:hidden transition-all duration-300 w-30" // Only show this on mobile
            />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-1 bg-black mb-1 mx-[10px]"></span>
          <span className="block w-6 h-1 bg-black mb-1 mx-[10px]"></span>
          <span className="block w-6 h-1 bg-black mb-1 mx-[10px]"></span>
        </button>
      </div>

      {/* Navigation Links (For Desktop) */}
      <ul className="hidden md:flex justify-center space-x-8 mt-[54px] text-white">
        <li>
          <Link href="/">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-200 ">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/Course">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110 ">
              Course
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/Exam">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110 ">
              Exam
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/Blog">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110 ">
              Blog
            </span>
          </Link>
        </li>
        <li>
          <Link href="/pages/About">
            <span className="font-inter text-[18px] font-medium leading-[21.78px] text-center underline decoration-transparent decoration-slice py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110 ">
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
                  className="font-inter text-[18px] font-medium leading-[21.78px] underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/Course">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px] underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Courses
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/Exam">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px] underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Exam
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/Blog">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px] underline decoration-transparent decoration-slice text-black block py-2 px-4"
                  onClick={closeMobileMenu}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages/About">
                <span
                  className="font-inter text-[18px] font-medium leading-[21.78px] underline decoration-transparent decoration-slice text-black block py-2 px-4"
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
