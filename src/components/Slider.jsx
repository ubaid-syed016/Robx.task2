import React from "react";
import slider1 from '../slider/slider_2.webp'
import slider2 from '../slider/slider_3.webp'
import slider3 from '../slider/nft_slide_2.webp'
import slider4 from '../slider/nft_slide_3.webp'
import slider5 from '../slider/slider_5.webp'
import slider6 from '../slider/slider_7.webp'


const Slider = () => {
  return (
    <main className="bg-[#0F062C] justify-center pt-14 lg:py-24  pb-28 p-5">
      <h2 class="lg:text-6xl text-5xl font-normal relative lg:p-10   md:p-10 p-4 ">
        <span class="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 md:left-24">
          GET STARTED WITH
        </span>
        <span class="gradient-span-1 text-[#EE58FF] relative md:left-14 lg:p-6 p-6 font-[600]">
          IMAGES &amp; NFTS
        </span>
      </h2>
      <p className="text-white items-center text-start md:px-24 p-3 pt-8 text-lg md:text-2xl leading-10 lg:leading-normal">
        Begin your creative odyssey with Images & NFTs. Immerse yourself in a
        realm where art merges with innovation, enabling exploration, creation,
        and sharing of your distinct vision through digital marvels and NFTs.
        Start now to ignite limitless digital creativity.
      </p>
      <marquee className=" mt-[40px]" direction="right">
       <div className="  flex gap-[55px]">
        <img src={slider1} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider2} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider3} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider4} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider5} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider6} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider1} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider2} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider3} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider4} alt="Image1"  className=" h-[125px] w-[125px]" />
        
        </div>
      </marquee>
      <marquee className=" mt-[40px]" direction="left">
       <div className="  flex gap-[55px]">
        <img src={slider1} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider2} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider3} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider4} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider5} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider6} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider1} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider2} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider3} alt="Image1"  className=" h-[125px] w-[125px]" />
        <img src={slider4} alt="Image1"  className=" h-[125px] w-[125px]" />
        
        </div>
      </marquee>
    </main>
  );
};

export default Slider;
