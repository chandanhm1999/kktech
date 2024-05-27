import React from "react";
import styled from "styled-components";

const CoverVideo = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <video
        className="w-full h-100 object-cover"
        src="/assets/mainCoverV/kktvideo.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
      />
    </div>
    );
};

export default CoverVideo;
