import React from 'react'
import InfoSection from '../components/InfoSection'
import { homeObjFour } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Petboarding from '../components/Petboarding';

const Petboardingpage = () => {
  return (
    <div>
        <Navbar/>
      <InfoSection {...homeObjFour}/>
      <Petboarding/>
    </div>
  ) 
}

export default Petboardingpage
