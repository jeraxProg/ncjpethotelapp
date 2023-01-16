import React from 'react'
import InfoSection from '../components/InfoSection'
import { homeObjFour } from '../components/InfoSection/Data';
import Petboarding from '../components/Petboarding';

const Petboardingpage = () => {
  return (
    <div>
      <InfoSection {...homeObjFour}/>
      <Petboarding/>
    </div>
  ) 
}

export default Petboardingpage
