import RightCard from '@/components/aboutComponents/sectionOne/RightCard'
import React from 'react'
import About from "@/components/homeSecTwo/About";
import Status from "@/components/homeSecTwo/Status";
import SecTwo from '@/components/aboutComponents/secTwo/SecTwo';
import Vision from '@/components/aboutComponents/secTwo/Vision';
import Steps from '@/components/aboutComponents/steps/Steps';
import AboutDemo from '../../components/aboutComponents/aboutdemo/AboutDemo';
import ConnectD from "@/components/homeSecLast/SecOneD/ConnectD";


const page = () => {
  return (
    <div>
      <RightCard />
      <Status />
      <Vision />
      <About />
      <SecTwo />
      <AboutDemo />
      {/* <Steps /> */}
      <ConnectD />
    </div>
  )
}

export default page
