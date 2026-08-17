import AboutSection from "./components/about.section";
import HeroSection from "./components/hero-section";
import Portfollio from "./components/portfolio";
import Location from "./components/location";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";

export default function Loading() {
  return (
    <>
      <HeroSection isLoading />
      <AboutSection isLoading />
      <Portfollio isLoading />
      <Location isLoading />
      <CallToAction />
      <Footer isLoading />
    </>
  );
}
