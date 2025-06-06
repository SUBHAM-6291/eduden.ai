'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isWhatsNewOpen, setIsWhatsNewOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsCoursesOpen(false);
      setIsWhatsNewOpen(false);
    }
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const toggleWhatsNew = () => {
    setIsWhatsNewOpen(!isWhatsNewOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-gucina transition-colors duration-500 ${
        isMenuOpen ? 'bg-white text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 w-32 sm:w-40 lg:w-52">
          <img
            src="/eduden.png"
            alt="EduDen Logo"
            className="object-contain w-full h-auto"
          />
        </div>

        <button
          className="md:hidden focus:outline-none text-[#FFD700] transition-colors duration-500"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
          <Link href="#/" className="hover:text-[#FFD700] transition-colors duration-500">
            Home
          </Link>
          <Link href="#/about" className="hover:text-[#FFD700] transition-colors duration-500">
            About Us
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <Link
              href="#/courses"
              className="hover:text-[#FFD700] transition-colors duration-500 flex items-center"
            >
              Courses
              <span className="ml-1">
                <svg
                  className="w-5 h-5 group-hover:text-[#FFD700] transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>
            </Link>
            {isCoursesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#FFD700] text-black rounded-lg shadow-lg z-50 transition-all duration-500">
                <Link
                  href="#/courses/web-development"
                  className="block px-4 py-2 hover:bg-[#FFC107] hover:text-black transition-colors duration-500"
                >
                  Web Development
                </Link>
                <Link
                  href="#/courses/data-science"
                  className="block px-4 py-2 hover:bg-[#FFC107] hover:text-black transition-colors duration-500"
                >
                  Data Science
                </Link>
                <Link
                  href="#/courses/graphic-design"
                  className="block px-4 py-2 hover:bg-[#FFC107] hover:text-black transition-colors duration-500"
                >
                  Graphic Design
                </Link>
                <Link
                  href="#/courses/digital-marketing"
                  className="block px-4 py-2 hover:bg-[#FFC107] hover:text-black transition-colors duration-500"
                >
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setIsWhatsNewOpen(true)}
            onMouseLeave={() => setIsWhatsNewOpen(false)}
          >
            <Link
              href="#/whatsnew"
              className="hover:text-[#FFD700] transition-colors duration-500 flex items-center"
            >
              What's New
              <span className="ml-1">
                <svg
                  className="w-5 h-5 group-hover:text-[#FFD700] transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>
            </Link>
            {isWhatsNewOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#FFD700] text-black rounded-lg shadow-lg z-50 transition-all duration-500">
                <Link
                  href="#/whatsnew/new-courses"
                  className="block px-4 py-2 hover:bg-[#FFC107] hover:text-black transition-colors duration-500"
                >
                  New Courses
                </Link>
                <Link
                  href="#/whatsnew/webinars"
                  className="block px-4 py-2 hover:bg-[#FFC107] hover:text-black transition-colors duration-500"
                >
                  Webinars
                </Link>
                <Link
                  href="#/whatsnew/blog-posts"
                  className="block px-4 py-2 hover:bg-[#FFC107] hover:text-black transition-colors duration-500"
                >
                  Blog Posts
                </Link>
              </div>
            )}
          </div>

          <Link href="#/verify" className="hover:text-[#FFD700] transition-colors duration-500">
            Verify
          </Link>
          <Link href="#/contact" className="hover:text-[#FFD700] transition-colors duration-500">
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <button className="border border-[#FFD700] rounded-full py-3 px-8 bg-transparent hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-700 ease-in-out">
            Enroll Now
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center w-full bg-white text-black space-y-4 py-4 transition-all duration-500">
          <Link
            href="#/"
            className="w-full text-center hover:text-[#FFD700] transition-colors duration-500"
          >
            Home
          </Link>
          <Link
            href="#/about"
            className="w-full text-center hover:text-[#FFD700] transition-colors duration-500"
          >
            About Us
          </Link>
          <div className="w-full">
            <button
              className="w-full text-center hover:text-[#FFD700] transition-colors duration-500 flex items-center justify-center"
              onClick={toggleCourses}
            >
              Courses
              <span className="ml-2">
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isCoursesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="w-full bg-[#FFD700] text-black rounded-lg shadow-lg mt-2">
                <Link
                  href="#/courses/web-development"
                  className="block px-4 py-2 text-center hover:bg-[#FFC107] hover:text-black transition-colors duration-300"
                >
                  Web Development
                </Link>
                <Link
                  href="#/courses/data-science"
                  className="block px-4 py-2 text-center hover:bg-[#FFC107] hover:text-black transition-colors duration-300"
                >
                  Data Science
                </Link>
                <Link
                  href="#/courses/graphic-design"
                  className="block px-4 py-2 text-center hover:bg-[#FFC107] hover:text-black transition-colors duration-300"
                >
                  Graphic Design
                </Link>
                <Link
                  href="#/courses/digital-marketing"
                  className="block px-4 py-2 text-center hover:bg-[#FFC107] hover:text-black transition-colors duration-300"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              className="w-full text-center hover:text-[#FFD700] transition-colors duration-500 flex items-center justify-center"
              onClick={toggleWhatsNew}
            >
              What's New
              <span className="ml-2">
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isWhatsNewOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isWhatsNewOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="w-full bg-[#FFD700] text-black rounded-lg shadow-lg mt-2">
                <Link
                  href="#/whatsnew/new-courses"
                  className="block px-4 py-2 text-center hover:bg-[#FFC107] hover:text-black transition-colors duration-300"
                >
                  New Courses
                </Link>
                <Link
                  href="#/whatsnew/webinars"
                  className="block px-4 py-2 text-center hover:bg-[#FFC107] hover:text-black transition-colors duration-300"
                >
                  Webinars
                </Link>
                <Link
                  href="#/whatsnew/blog-posts"
                  className="block px-4 py-2 text-center hover:bg-[#FFC107] hover:text-black transition-colors duration-300"
                >
                  Blog Posts
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="#/verify"
            className="w-full text-center hover:text-[#FFD700] transition-colors duration-500"
          >
            Verify
          </Link>
          <Link
            href="#/contact"
            className="w-full text-center hover:text-[#FFD700] transition-colors duration-500"
          >
            Contact Us
          </Link>
          <button
            className="border border-[#FFD700] rounded-full py-3 px-8 bg-transparent hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-500 ease-in-out"
            onClick={toggleMenu}
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;