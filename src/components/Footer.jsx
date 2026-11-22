import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-150 bg-[#181818] text-white px-10 pt-12">

      <div className="w-full grid grid-cols-5 text-center">

        <div className="flex flex-col gap-8">
          <h2 className="text-sm font-bold tracking-wider">RACING</h2>

          <div className="flex flex-col gap-6 text-xs">
            <p>Scuderia Ferrari HP</p>
            <p>SF-26</p>
            <p>Charles Leclerc</p>
            <p>Lewis Hamilton</p>
            <p>Hypercar</p>
            <p>Competizioni GT</p>
            <p>Hypersail</p>
            <p>Esports</p>
            <p>Scuderia Ferrari Driver<br />Academy</p>
            <p>Scuderia Ferrari Club</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-sm font-bold tracking-wider">SPORTS CARS</h2>

          <div className="flex flex-col gap-6 text-xs">
            <p>Модельный ряд</p>
            <p>Конфигура свой Феррари</p>
            <p>MyFerrari</p>
            <p>Подержанный</p>
            <p>дилеры</p>
            <p>Recall information</p>
            <p>TechInfo</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-sm font-bold tracking-wider">КОЛЛЕКЦИИ</h2>

          <div className="flex flex-col gap-6 text-xs">
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Shoes</p>
            <p>Eyewear</p>
            <p>Collectibles</p>
            <p>Ассортимент Scuderia Ferrari</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-sm font-bold tracking-wider">EXPERIENCES</h2>

          <div className="flex flex-col gap-6 text-xs">
            <p>Corse Clienti</p>
            <p>Ferrari Esports Series</p>
            <p>Ristorante Cavallino</p>
            <p>Ferrari Museums</p>
            <p>Ferrari World Abu Dhabi</p>
            <p>Ferrari Land Barcelona</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-sm font-bold tracking-wider">ABOUT US</h2>

          <div className="flex flex-col gap-6 text-xs">
            <p>Corporate</p>
            <p>Sustainability</p>
            <p>Media Centre</p>
            <p>News</p>
            <p>Magazine</p>
            <p>History</p>
            <p>Join us</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Footer;