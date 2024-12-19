import React from 'react' 
import TopHeader from '../../Components/TopHeader' 
import TermContent from './Content'

const TermsConditions = () => {
  return (
    <div className='bg-secondaryColor'>
      <TopHeader name="Terms and Conditions"/>  
      <TermContent/>
    </div>
  )
}

export default TermsConditions