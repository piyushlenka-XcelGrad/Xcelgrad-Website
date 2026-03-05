import React from 'react'
import FreshersHero from './Hero'
import WhyChooseSales from './WhySales'
import EarlyCareerJourney from './Mistakes'
import InternshipProjects from './InternAndProjects'
import FreshersNextSteps from './NextStep'
const Freshers = () => {
  return (
    <div className='mt-16'>
      
      <FreshersHero/>
      <WhyChooseSales/>
      <EarlyCareerJourney/>
      <InternshipProjects/>
      <FreshersNextSteps/>
    </div>
  )
}

export default Freshers
