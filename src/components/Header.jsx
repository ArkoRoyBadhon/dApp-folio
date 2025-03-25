import React from 'react';

const Header = ({ heroRef, aboutRef, projectsRef, skillRef, contactRef }) => {
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed w-full top-0 z-[9999] bg-gray-900 text-white p-8 shadow-lg">
      <nav className="container mx-auto">
        <ul className="flex space-x-8 justify-center">
          <li>
            <button
              onClick={() => scrollToSection(heroRef)}
              className="hover:text-gray-400 text-[14px] lg:text-[20px] transition duration-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-gray-400 text-[14px] lg:text-[20px] transition duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="hover:text-gray-400 text-[14px] lg:text-[20px] transition duration-300"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(skillRef)}
              className="hover:text-gray-400 text-[14px] lg:text-[20px] transition duration-300"
            >
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="hover:text-gray-400 text-[14px] lg:text-[20px] transition duration-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
