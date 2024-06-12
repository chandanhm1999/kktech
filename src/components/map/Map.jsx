"use client";
import Iframe from "react-iframe";
import { useState, useEffect } from "react";

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const iframeElement = document.querySelector("#faith-map-frame");

    const handleLoad = () => {
      setMapLoaded(true);
    };

    iframeElement?.addEventListener("load", handleLoad);

    return () => {
      iframeElement?.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="w-full p-10">
           {" "}
      <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        Our Location
      </h2>
           {" "}
      <div className="w-full mx-auto h-[300px] sm:h-[400px] lg:h-[500px] mb-[-1rem] sm:mb-[-3rem] bg-secondary rounded-md shadow-2xl overflow-hidden">
        {/*         {!mapLoaded && <div>Loading...</div>} */}
        <Iframe
          id="faith-map-frame"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124414.06320298435!2d77.40822944335936!3d12.975723000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d236c1284ff%3A0x927f6b509709e0e8!2sKKS%20Idigital%20Technology%20Pvt%20Ltd%20-%20Digital%20Signature!5e0!3m2!1sen!2sin!4v1718218001984!5m2!1sen!2sin"
          className="w-full h-full"
          frameBorder={0}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ display: mapLoaded ? "block" : "none" }}
        />
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default Map;
