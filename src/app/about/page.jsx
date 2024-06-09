import RightCard from '@/components/aboutComponents/sectionOne/RightCard'
import React from 'react'
import About from "@/components/homeSecTwo/About";
import Status from "@/components/homeSecTwo/Status";
import SecTwo from '@/components/aboutComponents/secTwo/SecTwo';

const page = () => {
  return (
    <div>
      <RightCard />
      <Status />
      <About />
      <SecTwo />
    </div>
  )
}

export default page
