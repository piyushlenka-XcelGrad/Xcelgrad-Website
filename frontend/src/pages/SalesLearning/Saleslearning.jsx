import React from 'react'
import LearningHeader from './Header'
import LearningPage from './Learning'
import StructuredLearningModules from './Modules'
import WorkshopsAndAssessments from './Workshop'
const Saleslearning = () => {
  return (
    <div className='mt-16'>
      {/* <LearningHeader /> */}
      <LearningPage />
      <StructuredLearningModules />
      <WorkshopsAndAssessments/>
    </div>
  )
}

export default Saleslearning
