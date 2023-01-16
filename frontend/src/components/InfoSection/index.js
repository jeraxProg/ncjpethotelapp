import React from 'react'
import {Button2} from '../ButtonElements';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1, Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, description2}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <Subtitle darkText={darkText}>{description2}</Subtitle>
              
              <BtnWrap>
                <Button2 to="/reserve"
                >{buttonLabel}</Button2>
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
              <Img src={img} alt={alt}/>
            </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
