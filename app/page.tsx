import EfficiencyMotor from "@/components/efficiencyMotor";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import HeroBanner from "@/components/heroBanner";
import MultipleAccessories from "@/components/multipleAccesseries";
import ProductsInformation from "@/components/productInformation";
import Spacification from "@/components/spacification";
import SubscribeNewsletter from "@/components/subscribeNewsletter";
import MFooter from "@/components/mFooter";
import Image from "next/image";
import FooterMobile from "@/components/mFooterMobile";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <HeroBanner />
      <Spacification />
      <ProductsInformation />
      <EfficiencyMotor />
      <MultipleAccessories />
      <Gallery />
      <SubscribeNewsletter />
      <Footer /> */}
      {/* <FooterMobile /> */}
      <MFooter />
    </main>
  );
}
