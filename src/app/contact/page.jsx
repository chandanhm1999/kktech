import ConnectD from "@/components/homeSecLast/SecOneD/ConnectD";
import Map from "@/components/map/Map";
import Contacting from '@/components/updatedContact/contact/Contacting'
import React from 'react'

const page = () => {
  return (
    <div>
      <Contacting />
      {/* <Map /> */}
      <ConnectD />
    </div>
  )
}

export default page
