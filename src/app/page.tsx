import AboutSection from "./components/about.section";
import HeroSection from "./components/hero-section";
import Portfollio from "./components/portfolio";
import Localization from "./components/localization";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";

// Troque para true enquanto o Prismic carrega; depois ligue ao estado real da fetch.
const isLoading = false;

export default function Home() {
  return (
    <>
      <HeroSection isLoading={isLoading} />
      <AboutSection isLoading={isLoading} />
      <Portfollio isLoading={isLoading} />
      <Localization isLoading={isLoading} />
      <CallToAction />
      <Footer isLoading={isLoading} />
    </>
  );
}
