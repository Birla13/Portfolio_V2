import React from "react";
import { LuLink } from "react-icons/lu";

import { Link } from "react-router-dom";
import { behanceLink, heroData } from "../data.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">{heroData.name}</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {heroData.description}
            </p>

            {/* Quote */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 inline-block">
              <p className="text-blue-700 font-medium text-lg">
                {heroData.quote}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to={behanceLink}
                target="_blank"
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start"
              >
                <LuLink size={20} />
                Behance
              </Link>
              <a
                href="#contact"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="order-first lg:order-last flex justify-center">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={heroData.image}
                    alt="Deepanshi - UI/UX Designer"
                    className="w-80 h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60 blur-xl"></div>

              {/* Floating accent elements */}
              <div className="absolute top-10 -left-4 w-8 h-8 bg-blue-400 rounded-lg rotate-12 opacity-80 shadow-lg"></div>
              <div className="absolute bottom-20 -right-4 w-6 h-6 bg-purple-400 rounded-full opacity-80 shadow-lg"></div>

              {/* Professional badge/label */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg border border-gray-100">
                <span className="text-sm font-semibold text-gray-700">
                  UI/UX Designer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
