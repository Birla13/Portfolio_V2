import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { name, navItems } from "../data.js";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on the projects page
  const isProjectsPage = location.pathname === "/projects";

  const renderNavLink = (item) => {
    if (item.name === "Featured Projects") {
      return (
        <Link
          key={item.name}
          to="/projects"
          className={`transition-colors duration-200 ${
            isProjectsPage
              ? "text-gray-900 font-medium"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {item.name}
        </Link>
      );
    }

    // For all other links, use anchor tags for main portfolio page
    return (
      <a
        key={item.name}
        href={item.href}
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        {item.name}
      </a>
    );
  };

  const renderMobileNavLink = (item) => {
    if (item.name === "Featured Projects") {
      return (
        <Link
          key={item.name}
          to="/projects"
          className={`transition-colors duration-200 py-2 ${
            isProjectsPage
              ? "text-gray-900 font-medium"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-gray-900">
            {name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(renderNavLink)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CgClose size={24} /> : <BiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(renderMobileNavLink)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
