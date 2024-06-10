import React from "react";
import ProductAero from "../../components/ProductAero/ProductAero";
import dynamic from "next/dynamic";

const Moving = dynamic(() => import("@/components/homeSecCollections/move/Move"), {
  ssr: false,
});

export default function Page() {
  

  return (
    <div>
      <ProductAero />
      <Moving />
    </div>
  );
}
