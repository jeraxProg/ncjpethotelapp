import React from 'react'
import Icon1 from '../../images/Running Dog.png'
import Icon2 from '../../images/grooming.png'
import Icon3 from '../../images/training.png'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Dog Daycare</ServicesH2>
            <ServicesP>With our dog day care services, your dog will be safe, engaged, and loved all day long!</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Spa and Grooming</ServicesH2>
            <ServicesP>
            A spa treatment to a stay in our dog boarding suites or dog daycare for a convenient way to pamper.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Professional dog training</ServicesH2>
            <ServicesP>PAdd professional dog training to dog day care or a stay in our dog boarding suites for your convenience.</ServicesP>
          </ServicesCard>
          
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
