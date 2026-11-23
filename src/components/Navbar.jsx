
import React, { useState } from "react";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = [
    "RACING",
    "SPORTS CARS",
    "COLLECTIONS",
    "EXPERIENCES",
    "ABOUT US",
  ];

  const searchGroups = [
    {
      title: "SPORTS CARS",
      links: ["ALL MODELS", "CAR CONFIGURATOR", "DEALER LOCATOR"],
    },
    {
      title: "RACING",
      links: ["SCUDERIA FERRARI HP", "HYPERCAR", "HYPERSAIL"],
    },
    {
      title: "EXPERIENCE",
      links: ["MUSEUMS", "FERRARI MAGAZINE", "RISTORANTE CAVALLINO"],
    },
  ];

  return (
    <>
    
      <header className="relative z-50 h-[42px] w-full bg-[#171717] border-b border-white/20">
        <nav className="flex h-full items-center justify-between px-6">

          
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center">
              <img
                src="/public/assets/logo2.png"
                alt="Logo"
                className="h-7 w-auto object-contain"
              />
            </a>

          
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[14px] font-semibold tracking-wide text-white
                  transition-colors duration-300 hover:text-gray-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

         
          <button
            onClick={() => setSearchOpen(true)}
            className="text-[14px] font-semibold tracking-wide text-white
            transition-colors hover:text-gray-400"
          >
            SEARCH
          </button>
        </nav>
      </header>

   
      <div
        className={`fixed inset-x-0 bottom-0 top-[42px] z-40
        overflow-y-auto bg-white transition-all duration-500
        ${
          searchOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative mx-auto min-h-full max-w-[740px] px-5 pt-14">

         
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute left-1/2 top-7 flex h-9 w-9
            -translate-x-1/2 items-center justify-center
            rounded-full border border-gray-400 text-2xl
            font-light text-black transition hover:bg-black hover:text-white"
            aria-label="Close search"
          >
            ×
          </button>

       
          <div className="mt-14 flex h-[72px] items-center border border-gray-300 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

            <svg
              className="h-5 w-5 shrink-0 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 5 5" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="h-full w-full bg-transparent px-3 text-[15px]
              text-black outline-none placeholder:text-gray-500"
              autoFocus={searchOpen}
            />

 
            <button aria-label="Voice search">
              <svg
                className="h-5 w-5 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
                <path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.93V21h2v-3.07A7 7 0 0 0 19 11Z" />
              </svg>
            </button>
          </div>

  
          <div className="mt-11 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {searchGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-[15px] font-bold text-black">
                  {group.title}
                </h3>

                <div className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="group flex items-center justify-between
                      gap-2 text-[13px] font-medium text-black"
                    >
                      {link}

                      <span className="text-xl transition-transform
                      group-hover:translate-x-1">
                        ›
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>


          <div className="mb-16 mt-20 grid grid-cols-1 items-center gap-8 sm:grid-cols-2">

            <img
              src="/public/assets/ferrari.jpeg"
              alt="Ferrari 12Cilindri"
              className="h-[210px] w-full object-cover"
            />

            <div>
              <h2 className="text-[17px] font-bold leading-6 text-black">
                FERRARI 12CILINDRI
                <br />
                MANUALE
              </h2>

              <p className="mt-7 max-w-[300px] text-[14px]
              leading-[18px] text-black">
                The soul of the Prancing Horse's iconic Gran Turismo cars
                meets advanced dynamics to deliver driving emotion,
                performance and comfort.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-3 text-[13px]
                font-medium text-black"
              >
                DISCOVER MORE

                <span className="flex h-9 w-9 items-center justify-center
                rounded-full border border-gray-400 text-xl
                transition-all hover:bg-black hover:text-white">
                  ›
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
