import React from 'react'
import Navbar from './_components/Navbar'
import Aboutus from './_components/Aboutus'
import Aboutus_Text from './_components/Aboutus_Text'
import Footer from './_components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Aboutus/>
      <Aboutus_Text/>
      <Footer/>
      
    </div>
  )
}

export default page
