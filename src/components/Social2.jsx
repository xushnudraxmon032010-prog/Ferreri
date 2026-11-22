import React from 'react'
import { MdAccessibilityNew } from 'react-icons/md'

const Social2 = () => {
  return (
    <div className="border-t-1 border-white w-full h-[380px] bg-[#181818] text-white px-14 pt-16">

      <div className="w-full flex flex-col items-center text-center">

        <div className="text-[9px] text-gray-400 leading-[16px] max-w-[700px]">

          <p>
            Ferrari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, the Netherlands and its corporate
            address at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), Italy, registered with the Dutch trade register under number 6406977
          </p>

          <br />

          <p>
            Ferrari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, Modena, Italy, Companies' Register of
            Modena, VAT and Tax number 00159560366 and share capital of Euro 20,260,000
          </p>

          <br />

          <p>
            Copyright 2026 - All rights reserved
          </p>

        </div>

        <div className="flex items-center gap-4 mt-[70px]">

          <div className="w-[50px] h-[50px] rounded-full border border-gray-500 flex items-center justify-center">
            <MdAccessibilityNew className="text-[38px]" />
          </div>

          <h2 className="text-[15px] font-semibold tracking-wide">
            ACCESSIBILITY SETTINGS
          </h2>

        </div>

      </div>

    </div>
  );
};

export default Social2;