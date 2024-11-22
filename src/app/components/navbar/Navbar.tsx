import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDesktop, setIsDesktop] = useState(false); // To detect if the device is desktop

  // Handle screen resize to update device type (desktop vs mobile)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Change this based on your breakpoints
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll events to change navbar style only on desktop
  useEffect(() => {
    if (!isDesktop) return; // Disable scroll functionality on mobile

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop]); // Re-run this effect when the device type changes

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`text-black py-4 fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white' : ''} ${!isDesktop ? 'bg-white' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo and Navigation */}
        <div className={`flex items-center justify-between transition-all duration-300 flex-row ${scrolled ? 'lg:flex-row' : 'lg:flex-col'} ${!isDesktop ? 'flex-row justify-between' : ''}`}>
          
          {/* Logo Section (Visible on Desktop and on the left on Mobile) */}
          <div className={`transition-all duration-300 ${scrolled ? 'ml-0' : 'mx-auto'} ${!isDesktop ? 'ml-0' : 'lg:block'} ${isDesktop ? '' : 'flex-1'}`}>
            <img
              // Change logo based on screen size (desktop or mobile) and scroll position
              src={isDesktop ? (scrolled ? "/logo-mobile.svg" : "/logo.svg") : "/logo-mobile.svg"} 
              alt="Logo"
              className={`h-10 transition-all duration-300 ${scrolled ? 'mr-4' : 'lg:w-[247px] lg:h-[103px]'}`} 
            />
          </div>

          {/* Hamburger Menu Button for Mobile (Visible on Mobile, on the Right) */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMobileMenu} // Toggle mobile menu visibility
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop only) */}
          <div className={`hidden ${scrolled ? 'text-black' : 'text-white mt-[27px]'} lg:flex space-x-8 sm:space-y-0 sm:flex-row sm:space-x-8`}>
            <Link href="/" className="hover:text-gray-400 w-[51px] h-[22px]" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/course" className="hover:text-gray-400" onClick={closeMobileMenu}>
              Courses
            </Link>
            <Link href="/exam" className="hover:text-gray-400" onClick={closeMobileMenu}>
              Exam
            </Link>
            <Link href="/blog" className="hover:text-gray-400" onClick={closeMobileMenu}>
              Blog
            </Link>
            <Link href="/about-us" className="hover:text-gray-400" onClick={closeMobileMenu}>
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (when the hamburger is clicked) */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white text-black p-4 shadow-lg">
          <ul>
            <li>
              <Link href="/" className="block py-2 px-4 hover:text-gray-400" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/course" className="block py-2 px-4 hover:text-gray-400" onClick={closeMobileMenu}>
                Course
              </Link>
            </li>
            <li>
              <Link href="/exam" className="block py-2 px-4 hover:text-gray-400" onClick={closeMobileMenu}>
                Exam
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block py-2 px-4 hover:text-gray-400" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="block py-2 px-4 hover:text-gray-400" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
