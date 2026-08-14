import AboutSection from "./components/about.section";
import HeroSection from "./components/hero-section";
import Portfollio from "./components/portfolio";
import Localization from "./components/localization";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Portfollio />
      <Localization />
    </>
  );
}
