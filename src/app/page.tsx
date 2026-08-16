import AboutSection from "./components/about.section";
import HeroSection from "./components/hero-section";
import Portfollio from "./components/portfolio";
import Localization from "./components/localization";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("homepage")

  console.log(home.data);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Portfollio />
      <Localization />
      <CallToAction />
      <Footer />
    </>
  );
}
