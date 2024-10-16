"use client";
import Head from "next/head";
import Image from "next/image";
import logo from "./assets/logo.png";
import React, { useState, useRef } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#100a11] overflow-x-hidden">
      <Head>
        <title>Pakistan’s First AI Legal Assistant | YourMunshi</title>
        <meta
          name="description"
          content="Pakistan’s First AI Legal Assistant"
        />
      </Head>

      {/* Header */}
      <header className="w-full h-20 sticky backdrop-blur-md bg-[#0f0a106a] laptop:h-16 top-0 text-white flex items-center z-10">
        <nav className="bg-[#100a11] font-poppins flex  items-center p-4 relative">
          {/* Logo aligned on the left */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="YourMunshi Logo"
              className="md:ml-5 md:p-10 md:mt-4 md:pt-5 p-10"
            />
          </div>
          {/* Desktop Menu aligned on the right */}
          <div className="hidden md:flex items-center md:justify-items-end">
            <ul className="flex gap-10 text-lg items-center ">
              <li className="hover:text-[#dbccf6]">
                <a href="/">Why YourMunshi</a>
              </li>

              {/* Core Platform Dropdown */}
              <li className="group relative hover:text-[#dbccf6]">
                <button className="inline-flex items-center whitespace-nowrap text-15 tracking-wider hover:cursor-pointer leading-none transition-colors duration-200">
                  <span>Core Platform</span>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="ml-[2px]"
                  >
                    <path d="M2.5 6 6 9l3.5-3" stroke="currentColor" />
                  </svg>
                </button>
                <div className="group-hover:opacity-100 z-10 invisible absolute bottom-0 translate-y-full pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible">
                  <div className="overflow-hidden rounded-md border border-[#9651b88f]">
                    <ul className="flex flex-col space-y-4 bg-[#241928] p-4 pr-6">
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Contract Intelligence
                        </a>
                      </li>
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Contract Analytics
                        </a>
                      </li>
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Supplier Relationship Management
                        </a>
                      </li>
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Intelligent Enterprise Search
                        </a>
                      </li>
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Workflows
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Company Dropdown */}
              <li className="group relative hover:text-[#dbccf6]">
                <button className="inline-flex items-center whitespace-nowrap text-15 tracking-wider hover:cursor-pointer leading-none transition-colors duration-200">
                  <span>Company</span>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="ml-[2px]"
                  >
                    <path d="M2.5 6 6 9l3.5-3" stroke="currentColor" />
                  </svg>
                </button>
                <div className="group-hover:opacity-100 z-10 invisible absolute bottom-0 translate-y-full pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible">
                  <div className="overflow-hidden rounded-md border border-[#9651b88f]">
                    <ul className="flex flex-col space-y-4 bg-[#241928] p-4 pr-6 text-xl">
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          About us
                        </a>
                      </li>
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Resources Dropdown */}
              <li className="group relative hover:text-[#dbccf6]">
                <button className="inline-flex items-center whitespace-nowrap text-15 tracking-wider hover:cursor-pointer leading-none transition-colors duration-200">
                  <span>Resources</span>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="ml-[2px]"
                  >
                    <path d="M2.5 6 6 9l3.5-3" stroke="currentColor" />
                  </svg>
                </button>
                <div className="group-hover:opacity-100 z-10 invisible absolute bottom-0 translate-y-full pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible">
                  <div className="overflow-hidden rounded-md border border-[#9651b88f]">
                    <ul className="flex flex-col space-y-4 bg-[#241928] p-4 pr-6 text-xl">
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="text-white hover:text-[#b862e3]" href="#">
                          Content Library
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            {/* Contact Sales and Book a Demo */}
            <ul className="flex gap-10 font-semibold items-center">
              <li className="hover:text-[#dbccf6] text-lg ml-5">
                <a href="">Contact Sales</a>
              </li>
              <li className="bg-white text-black px-6 h-[35px] flex items-center justify-center rounded-full hover:bg-[#dbccf6]">
                <a href="#">Book a Demo</a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div ref={dropdownRef} className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div
              className={`absolute top-28 left-0 w-full bg-[#100a11] transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col gap-4 p-4 text-white">
                <li className="hover:text-[#dbccf6]">
                  <a href="/" onClick={closeMenu}>
                    Why YourMunshi
                  </a>
                </li>
                <li className="hover:text-[#dbccf6]">
                  <a href="#" onClick={closeMenu}>
                    Core Platform
                  </a>
                </li>
                <li className="hover:text-[#dbccf6]">
                  <a href="#" onClick={closeMenu}>
                    Company
                  </a>
                </li>
                <li className="hover:text-[#dbccf6]">
                  <a href="#" onClick={closeMenu}>
                    Resources
                  </a>
                </li>
                <li className="hover:text-[#dbccf6]">
                  <a href="#" onClick={closeMenu}>
                    Contact Sales
                  </a>
                </li>
                <li className="bg-white text-black px-6 h-[35px] flex items-center justify-center rounded-full hover:bg-[#dbccf6]">
                  <a href="#" onClick={closeMenu}>
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="main"
        className="flex px-4 relative md:ml-20 laptop:flex-col"
      >
        <div className="flex   justify-center items-center scale-95 flex-col w-full">
          <h1 className="text-[70px] mx-mobile:text-[80px] drop-shadow-[0px_0px_60px_#6533ca]">
            <span className="text-[#c06bf1] ">Introducing YourMunshi</span>
          </h1>
          <h1 className="text-[40px] mx-mobile:text-[80px] drop-shadow-[0px_0px_60px_#6533ca]">
            <span className="text-[#fdfcfd]">
              Pakistan’s First AI Legal Assistant
            </span>
          </h1>

          <a
            href="#next"
            className="bg-[#9966ff] hover:shadow-[0px_0px_95px_#bb99ff74] text-white px-10 py-3 text-2xl rounded-[40px] mt-7"
          >
            Book a Demo
          </a>
        </div>
        <div className="w-full flex justify-center items-center">
          <video
            className="h-[80vh] scale-110 laptop:scale-100"
            playsInline
            muted
            autoPlay
            loop
          >
            <source src="/assets/hero-video.webm" type="video/webm" />
          </video>
        </div>
      </section>

      {/* Section 1 - 3x Faster Cycles */}
      <section
        id="next"
        className=" h-full  gap-5 flex flex-wrap laptop:gap-20 py-[100px] laptop:py-[10px]"
      >
        <div className="text-white  md:px-20 xl-laptop:px-4 ml-3">
          <h1 className="text-[100px] mx-mobile:text-[80px] drop-shadow-[0px_0px_60px_#6533ca]">
            <span className="text-[#c06bf1]">3x</span>
          </h1>
          <h4 className="text-[25px]  mx-mobile:text-[20px] ">Faster Cycles</h4>
          <p className="w-[300px]">
            Stop wasting time with manual contract review and analysis. Access
            critical data across all contracts in seconds.
          </p>
        </div>
        <div className="text-white md:px-20 xl-laptop:px-4 ml-3">
          <h1 className="text-[100px] mx-mobile:text-[80px] drop-shadow-[0px_0px_90px_#6533ca]">
            <span className="text-[#c06bf1]">10%+</span>
          </h1>
          <h4 className="text-[25px] mx-mobile:text-[20px]">Cost Savings</h4>
          <p className="w-[300px]">
            Insights into both contract and spend data together enable smart,
            quick decisions for cost consolidation and rationalization.
          </p>
        </div>
        <div className="text-white md:px-20 xl-laptop:px-4 ml-3">
          <h1 className="text-[100px] mx-mobile:text-[80px] drop-shadow-[0px_0px_60px_#6533ca]">
            <span className="text-[#c06bf1]">30</span>
          </h1>
          <h4 className="text-[25px] mx-mobile:text-[20px]">
            Day Implementation
          </h4>
          <p className="w-[300px]">
            Get up and running quickly with no-code workflows plus
            out-of-the-box integrations.
          </p>
        </div>
      </section>

      {/* Section 2 - Contract Intelligence */}
      <section className="md:px-36  laptop:px-4 text-white w-full h-full flex flex-col laptop:gap-10 gap-20 justify-center items-center">
        <span className="group flex h-[10px] gap-[8px] mx-auto w-fit">
          <span className="bg-[#9966ff] w-[40px] rounded-xl"></span>
          <span className="bg-[#9966ff] w-[10px] rounded-full"></span>
        </span>
        <h1 className="font-poppins font-semibold text-2xl md:text-[60px] text-center md:leading-[80px] laptop:text-[32px] drop-shadow-[0px_0px_100px_#6533ca]">
          Contract Intelligence to drive financial performance
        </h1>
        <div className="w-full flex justify-center items-center">
          <video
            className="h-[50vh] scale-110 laptop:scale-100"
            playsInline
            muted
            autoPlay
            loop
          >
            <source src="/assets/dashboardd-video.webm" type="video/webm" />
          </video>
        </div>
        <p className="font-poppins text-[25px] text-center mx-mobile:text-[14px]">
          YourMunshi helps leaders{" "}
          <strong className="bg-gradient-to-r from-[#ca6afb] to-[#9966ff] bg-clip-text text-transparent">
            track every dollar
          </strong>{" "}
          coming in and going out of the organization
        </p>
        <a className="bg-[#9966ff] hover:shadow-[0px_0px_95px_#bb99ff74] text-white  text-2xl px-9 py-3 rounded-[40px] md:mt-7">
          Learn More
        </a>
      </section>

      {/* Section 3 - Financial Insights */}
      <section className="w-full h-full flex justify-center gap-10 items-center flex-wrap md:flex-col md:px-28 laptop:px-5 font-poppins text-white mt-20">
        <div>
          <h3 className="md:text-[60px] text-2xl ml-5 xl-laptop:text-[30px] xl-laptop:leading-[45px] md:leading-[67px]">
            Instant access to data to drive smarter financial decisions
          </h3>
          <p className="mt-4 max-w-[500px] text-md ml-5 text-18 font-light">
            Find the financial insights you need to make smarter decisions.
            Understand what products and services you’re paying for to optimize
            your spend and reduce duplication.
          </p>
          <a className="text-[#9966ff] mt-5 ml-5 font-semibold hover:text-[#ca6afb]">
            Learn more
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={logo}
            alt="YourMunshi Logo"
            className="rounded-2xl drop-shadow-[35px_0px_100px_#6533ca7a]"
          />
        </div>
      </section>

      {/* Section 4 - Forecast */}
      <section className="w-full h-full flex flex-wrap justify-center gap-16 items-center md:flex-col md:px-28 laptop:px-5 font-poppins text-white mt-20">
        <div>
          <h3 className="md:text-[60px] text-2xl ml-5 xl-laptop:text-[30px] xl-laptop:leading-[45px] md:leading-[67px]">
            Instant access to data to drive smarter financial decisions
          </h3>
          <p className="mt-4 max-w-[500px] text-md ml-5 text-18 font-light">
            Find the financial insights you need to make smarter decisions.
            Understand what products and services you’re paying for to optimize
            your spend and reduce duplication.
          </p>
          <a className="text-[#9966ff] mt-5 ml-5 font-semibold hover:text-[#ca6afb]">
            Learn more
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={logo}
            alt="YourMunshi Logo"
            className="rounded-2xl drop-shadow-[35px_0px_100px_#6533ca7a]"
          />
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations md:px-32 font-poppins h-full w-full text-center flex justify-center items-center relative mt-20">
        <div className="text-center">
          <h2 className="md:text-[60px] text-2xl  text-white md:leading-[70px]">
            Enhance your applications with integrations
          </h2>
          <p className="mt-6 text-[20px] ml-5 text-[#cdc8d0] max-w-lg">
            Integrate your existing enterprise applications out of the box.
            YourMunshi connects to ERP, P2P, SSO, and more.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-20">
          {/* Add images and logos for integrations */}
        </div>
      </section>

      {/* Latest News */}
      <section className="flex flex-col justify-center items-center text-white font-poppins md:px-32 w-full h-full mt-20">
        <h2 className="text-center md:text-[60px] text-3xl leading-tight tracking-tight">
          Latest News About YourMunshi
        </h2>
        <div className="w-full flex gap-10 sm:ml-5 sm:mr-5 flex-wrap">
          <article className="bg-[#2e1938] text-white md:p-8 p-3 w-full text-center rounded-md mt-5">
            <h3 className="md:text-[25px] text-xl m-1">
              YourMunshi Announces $16M Series A Round
            </h3>
            <p>
              Today is a big day for YourMunshi. We &apos ve raised $16M in
              Series A funding led by Align Ventures with other investors.
            </p>
          </article>
          {/* Other articles */}
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#1b131d] text-white md:px-28 flex md:justify-between flex-wrap items-center py-10 mt-10">
        <div className="flex flex-col gap-5 ">
          <Image
            src={logo}
            alt="YourMunshi Logo"
            className="md:ml-5 md:p-10 md:mt-4 md:pt-5  p-10"
          />
        </div>
        <div className="flex flex-col gap-5 mb-6 sm:ml-6">
          <h4 className="text-2xl">Contact</h4>
          <p>social@yourmunshi.com</p>
        </div>
      </section>
      <p className="text-center bg-[#1b131d]">
        © 2023 YourMunshi Technologies, Inc. All Rights Reserved.
      </p>
    </div>
  );
}
