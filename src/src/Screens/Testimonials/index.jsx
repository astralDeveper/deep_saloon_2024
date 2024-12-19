import React from 'react' 
import TopHeader from '../../Components/TopHeader'
import TestimonialCardComponent from './TestimonialCardCompnent'

const Testimonials = () => {
  return (
    <div className='bg-secondaryColor'>
      <TopHeader name="Our Testimonials"/>
      <TestimonialCardComponent/>
    </div>
  )
}

export default Testimonials