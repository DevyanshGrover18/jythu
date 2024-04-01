import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#cbf7df] flex justify-between p-3 max-w-full">
        <div>
          <img src="jythuLogo.png" alt="" className="w-72 lg:w-32" />
        </div>
        
        <ul className="invisible lg:visible flex items-center gap-8">
          <li className="flex items-center">
            Home<span class="material-symbols-outlined">expand_more</span>
          </li>
          <li>About Us</li>
          <li className="flex items-center">
            Pages<span class="material-symbols-outlined">expand_more</span>
          </li>
          <li className="flex items-center">
            Services<span class="material-symbols-outlined">expand_more</span>
          </li>
          <li className="flex items-center">
            News & Events
            <span class="material-symbols-outlined">expand_more</span>
          </li>
          <li>Contact Us</li>
        </ul>
        <div className="flex items-center gap-3 ">
          <span class="material-symbols-outlined visible lg:invisible">menu</span>
          <span class="material-symbols-outlined">shopping_bag</span>
          <span class="material-symbols-outlined">search</span>
          <div className="invisible lg:visible flex items-center justify-center bg-gradient-to-r from-[#129c8d] to-[#4eee8b] p-2 px-2 rounded-full">
            Get Quote
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
