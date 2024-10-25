// import Image from "next/image";

import AlternatingSections from "./components/ui/AlternatingSections";
import Colorselect from "./components/ui/colorselect";
import ContactUs from "./components/ui/contactus";
import Landing from "./components/ui/landing/landing";
import Product from "./components/ui/product";
import CustomerShowcase from "./components/ui/reviews";
import TwoVisionSection from "./components/ui/twovisionsection";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center mb-0 justify-between p-24">
        <Landing />
      </div>
      <Colorselect />
      <Product/>
      <TwoVisionSection/>
      <AlternatingSections/>
      <ContactUs/>
      <CustomerShowcase/>
      
    </>
  );
}
