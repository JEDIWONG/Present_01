import React, { useEffect } from 'react';
import FlipCard from './FlipCard';
import './Surprise.css';
import { Link } from 'react-router-dom';

function Surprise() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('fade-in');
        } else {
          element.classList.remove('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="surprise-page-container">
        <div className="surprise-letter-head animate-on-scroll">
          <h2>From :</h2>
          <h2 className="name-tag">阿咸鱼 | 笨笨 | 小小笨 | 小小小笨</h2>
        </div>

        <div className="surprise-letter-head animate-on-scroll">
          <h2>To :</h2>
          <h2 className="name-tag">慧慧 美人鱼</h2>
        </div>

        <div className="surprise-letter-head animate-on-scroll">
          <h2>Title :</h2>
          <h2 className="name-tag">生辰快乐</h2>
        </div>

        <div className="text-start animate-on-scroll">
          <h3>Lets Start With</h3>
          <div className="elipse-container">
            <div className="elipse"></div>
            <div className="elipse"></div>
            <div className="elipse"></div>
          </div>
        </div>

        <div className="us-container animate-on-scroll">
          <div className="us-card" id='us-card'>
            <h1>Us</h1>
            <div className="info-container">
              <h2 className="info-label">We In Relationship</h2>
              <h2 className="info-tag">Since 20 March 2024</h2>
            </div>
            <div className="info-container">
              <h2 className="info-label">We First Met At</h2>
              <h2 className="info-tag">English Class</h2>
            </div>
            <div className="info-container">
              <h2 className="info-label">We Start Relationship At</h2>
              <h2 className="info-tag">In Front HEPA</h2>
            </div>
            <div className="info-container">
              <h2 className="info-label">Now We Have Reached</h2>
              <h2 className="info-tag">128 Days</h2>
            </div>
          </div>
        </div>

        <div className="section-1 animate-on-scroll">
          <div className="section-1-card">
            <h2>Kong Min Huey</h2>
            <h3>“Death is the only Certainty”</h3>
          </div>
          <h2 className="section-1-label">YOU</h2>
        </div>

        <div className="section-1 animate-on-scroll">
          <h2 className="section-1-label">Me</h2>
          <div className="section-1-card">
            <h2>Wong Zhi Kin</h2>
            <h3>"Vegetable Taste Like Sadness"</h3>
          </div>
        </div>

        <div className="section-2-card animate-on-scroll">
          <h2 style={{fontSize:"32px"}}>Your Are</h2>
          <div className="card-item-container">
            <FlipCard str="最漂亮的美人鱼"></FlipCard>
            <FlipCard str="我的宝宝"></FlipCard>
            <FlipCard str="我的老婆"></FlipCard>
            <FlipCard str="体贴的女友"></FlipCard>
          </div>
        </div>

        <div className="section-2-card animate-on-scroll">
          <h2 style={{fontSize:"32px"}}>What I Like About You</h2>
          <div className="card-item-container">
            <FlipCard str="包容笨笨"></FlipCard>
            <FlipCard str="颜值高"></FlipCard>
            <FlipCard str="善良"></FlipCard>
            <FlipCard str="良好的聆者"></FlipCard>
            <FlipCard str="教会笨笨成长"></FlipCard>
            <FlipCard str="节俭"></FlipCard>
          </div>
        </div>

        <div className="section-3-card animate-on-scroll">
          <h1>I Hope . . .</h1> 
          <Link to={"/Hope"}>
            <button className='button-hope'>Reveal</button>
          </Link>
        </div>

      </div>
    </>
  );
}

export default Surprise;
