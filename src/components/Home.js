import React, { useState } from 'react';
import homepage from '../assets/images/mac/HomepageMobile_2500x1000.gif';
import homepage1 from '../assets/images/mac/Homepage-mockup-desk.gif';
import TrendingSection from '../pages/Trending';
import PromptInput from '../pages/PromptInput';
const Home = () => {
  const [design, setDesign] = useState(null);

  return (
    <>
      <img src={homepage} alt="homepage" />
      <div className="mx-auto w-full max-w-4xl p-4 my-20">
        <PromptInput setDesign={setDesign} />
        {design && (
          <div className="mt-5">
            <img src={design.data.uri} alt="Generated Design" className="max-w-full h-auto" />
          </div>
        )}
      </div>
      <TrendingSection />
      <img src={homepage1} alt="homepage" />
    </>
  );
};

export default Home;
