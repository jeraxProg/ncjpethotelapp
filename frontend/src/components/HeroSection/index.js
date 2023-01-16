import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button2 } from '../ButtonElements';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }


  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Home for your Family Pet</HeroH1>
        <HeroP>
    
        </HeroP>
        <HeroBtnWrapper>
          <Button2 to="/reserve" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover} 
          primary="true" 
          dark="true"
          smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}>
            Reserve Now {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button2>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
