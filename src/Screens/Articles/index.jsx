import React from 'react'  
import TopHeader from '../../Components/TopHeader'
import CardComponent from './cardComponent'

const Articles = () => {
  return (
    <div className='bg-secondaryColor'>
      <TopHeader name="Our Articles and Blogs" />
      <CardComponent />
    </div>
  )
}

export default Articles