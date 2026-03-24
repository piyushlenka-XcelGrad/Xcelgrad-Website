import React from 'react'
import AboutCoreStatement from './Core'
import Founders from './Founders'
import Mission from './Misson'
import Vision from './Vision'
import StrategyPillars from './Pillars'
import ExecutionPillars from './ExceutionPillars'
import CoreValues from './CoreValues'
const About = () => {
  return (
    <div>
      <AboutCoreStatement/>
      <Founders/>
      <Vision/>
      <Mission/>
      <StrategyPillars/>
      <ExecutionPillars/>
      <CoreValues/>
    </div>
  )
}

export default About
