import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitch, FaXTwitter, FaYoutube, FaPlus } from 'react-icons/fa6'

const SocialMedia = () => {
  return (
    <div className="border-t-1 border-white w-full h-[226px] bg-[#181818] text-white px-14 pt-16">

      <div className="grid grid-cols-4 gap-y-10">

        <div className="flex items-center gap-5">
          <FaFacebookF className="text-lg" />
          <p className="text-sm font-semibold tracking-wider">FACEBOOK</p>
          <FaPlus className="text-lg ml-2" />
        </div>

        <div className="flex items-center gap-5">
          <FaInstagram className="text-xl" />
          <p className="text-sm font-semibold tracking-wider">INSTAGRAM</p>
          <FaPlus className="text-lg ml-2" />
        </div>

        <div className="flex items-center gap-5">
          <FaLinkedin className="text-lg" />
          <p className="text-sm font-semibold tracking-wider">LINKEDIN</p>
          <FaPlus className="text-lg ml-2" />
        </div>

        <div className="flex items-center gap-5">
          <FaTiktok className="text-lg" />
          <p className="text-sm font-semibold tracking-wider">TIK TOK</p>
        </div>

        <div className="flex items-center gap-5">
          <FaTwitch className="text-lg" />
          <p className="text-sm font-semibold tracking-wider">TWITCH</p>
        </div>

        <div className="flex items-center gap-5">
          <FaXTwitter className="text-xl" />
          <p className="text-sm font-semibold tracking-wider">X</p>
          <FaPlus className="text-lg ml-2" />
        </div>

        <div className="flex items-center gap-5">
          <FaYoutube className="text-lg" />
          <p className="text-sm font-semibold tracking-wider">YOUTUBE</p>
        </div>

      </div>

    </div>
  );
};

export default SocialMedia;