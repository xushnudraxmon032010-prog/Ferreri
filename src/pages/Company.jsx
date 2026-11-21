import React from 'react'
import { gsap } from "gsap";

const Company = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='grid grid-cols-2 gap-0'>

        <div className='relative w-full h-[480px] overflow-hidden group cursor-pointer'>
          <img
            className='w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110'
            src="https://i.pinimg.com/736x/f9/ce/de/f9cedef2f9285837343f3eb42f731dac.jpg"
            alt="Ferrari Gifts"
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
            <h2 className='text-lg font-bold mb-8'>Коллекции</h2>
            <h1 className='text-4xl font-bold mb-10'>FERRARI LOGO <br /> GIFTS</h1>

            <div className="flex items-center gap-3">
              <button className="text-sm relative group/btn cursor-pointer">
                ПОСМОТРЕТЬ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover/btn:w-full"></span>
              </button>

              <span className="w-11 h-11 border border-white rounded-full flex items-center justify-center text-2xl cursor-pointer hover:border-red-500 transition-all duration-1000">
                ›
              </span>
            </div>
          </div>
        </div>

        <div className='relative w-full h-[480px] overflow-hidden group cursor-pointer'>
          <img
            className='w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110'
            src="https://i.ytimg.com/vi/DkC6AfNVbRA/maxresdefault.jpg"
            alt="Ferrari Museums"
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
            <h2 className='text-lg font-bold mb-8'>Ferrari Museums</h2>
            <h1 className='text-4xl font-bold mb-10'>GREATEST HITS</h1>

            <div className="flex items-center gap-3">
              <button className="text-sm relative group/btn cursor-pointer">
                ПОСМОТРЕТЬ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover/btn:w-full"></span>
              </button>

              <span className="w-11 h-11 border border-white rounded-full flex items-center justify-center hover:border-[3px] text-2xl cursor-pointer hover:border-red-500 transition-all duration-1000">
                ›
              </span>
            </div>
          </div>
        </div>

        <div className='relative w-full h-[480px] overflow-hidden group cursor-pointer'>
          <img
            className='w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110'
            src="https://avatars.mds.yandex.net/i?id=4d4cb42206ec81393b962237fcfc4c2236cab5cd-8172987-images-thumbs&n=13"
            alt="Magazine"
          />
          <div className='absolute inset-0 bg-black/30'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
            <h2 className='text-lg mb-6'>Журнал</h2>
            <h1 className='text-3xl font-bold mb-10'>Новая эра ручного управления</h1>

            <div className="flex items-center gap-3">
              <button className="text-sm relative group/btn cursor-pointer">
                ПОСМОТРЕТЬ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover/btn:w-full"></span>
              </button>

              <span className="w-11 h-11 border border-white rounded-full flex items-center justify-center text-2xl cursor-pointer hover:border-red-500 transition-all duration-500">
                ›
              </span>
            </div>
          </div>
        </div>

        <div className='relative w-full h-[480px] overflow-hidden group cursor-pointer'>
          <img
            className='w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110'
            src="https://avatars.mds.yandex.net/i?id=7d4e15d077a95e00c0b83661b4d40377445f0e3a-10143230-images-thumbs&n=13"
            alt="Sketch Body"
          />
          <div className='absolute inset-0 bg-black/30'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
            <h1 className='text-4xl font-bold mb-10'>SKETCH BODY</h1>

            <div className="flex items-center gap-3">
              <button className="text-sm relative group/btn cursor-pointer">
                ПОСМОТРЕТЬ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover/btn:w-full"></span>
              </button>

              <span className="w-11 h-11 border border-white rounded-full flex items-center justify-center text-2xl cursor-pointer hover:border-red-500 transition-all duration-500">
                ›
              </span>
            </div>
          </div>
        </div>

        <div className='relative w-full h-[480px] overflow-hidden group cursor-pointer'>
          <img
            className='w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110'
            src="https://avatars.mds.yandex.net/i?id=9aa271db54e337174f8c52533d99cf0785119f19-16411099-images-thumbs&n=13"
            alt="Ferrari Approved"
          />
          <div className='absolute inset-0 bg-black/30'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
            <h2 className='text-lg mb-5'>Ferrari Approved</h2>
            <h1 className='text-4xl font-bold mb-10'>PRE-OWNED</h1>

            <div className="flex items-center gap-3">
              <button className="text-sm relative group/btn cursor-pointer">
                ПОСМОТРЕТЬ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover/btn:w-full"></span>
              </button>

              <span className="w-11 h-11 border border-white rounded-full flex items-center justify-center text-2xl cursor-pointer hover:border-red-500 transition-all duration-500">
                ›
              </span>
            </div>
          </div>
        </div>

        <div className='relative w-full h-[480px] overflow-hidden group cursor-pointer'>
          <img
            className='w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110'
            src="https://i.pinimg.com/originals/0d/47/63/0d47635ccc899aac1e07dee8a037f22b.jpg?nii=t"
            alt="Sport Cars"
          />
          <div className='absolute inset-0 bg-black/30'></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
            <h2 className='text-lg mb-5'>Спортивные автомобили</h2>
            <h1 className='text-3xl font-bold mb-10'>Прошлые модели</h1>

            <div className="flex items-center gap-3">
              <button className="text-sm relative group/btn cursor-pointer">
                ПОСМОТРЕТЬ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover/btn:w-full"></span>
              </button>

              <span className="w-11 h-11 border border-white rounded-full flex items-center justify-center text-2xl cursor-pointer hover:border-red-500 transition-all duration-500">
                ›
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Company;