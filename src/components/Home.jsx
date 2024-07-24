import React from 'react'
import Navbar from './Navbar'
import Hero1 from './Hero1';
import ScrollButton from './ScrollButton';
import ImageGen from './ImageGen';
import VoiceOvers from './VoiceOvers';
import Slider from './Slider';
import Intelli from './Intelli';
import LLM from './LLM';
import AIDevelop from './AIDevelop';
import SocialSphere from './SocialSphere';
import FAQ from './FAQ';
import Footer from './Footer';
import Section9 from './FuturePlans';
import Bottom from './Bottom';
import Hero from './Hero';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 />
      <ScrollButton />
      <Hero />
      <ImageGen/>
      <VoiceOvers/>
      <Slider />
      <LLM />
      <Intelli />
      <AIDevelop />
      <Section9/>
      <SocialSphere/>
      <FAQ/>
      <Footer />
      <Bottom/>
    </div>
  )
}

export default Home
