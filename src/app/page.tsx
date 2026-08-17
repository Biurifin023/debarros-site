import AboutSection from "./components/about.section";
import HeroSection from "./components/hero-section";
import Portfollio from "./components/portfolio";
import Location from "./components/location";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import { createClient } from "@/prismicio";
import { asLink } from "@prismicio/client";
import {
  DEFAULT_WHATSAPP_PHONE,
  parseWhatsappPhone,
} from "./utils/whatsapp-phone";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("homepage");

  const portfolioImages = home.data.portfolio_imgs.flatMap((item) =>
    [
      item.img1,
      item.img2,
      item.img3,
      item.img4,
      item.img5,
      item.img6,
      item.img7,
      item.img8,
      item.img9,
      item.img10,
    ].filter((img) => img.url),
  );

  const whatsappPhone =
    parseWhatsappPhone(asLink(home.data.social_links[0]?.what)) ??
    DEFAULT_WHATSAPP_PHONE;

  return (
    <>
      <HeroSection
        image={home.data.hero_image}
        whatsappPhone={whatsappPhone}
      />
      <AboutSection
        image={home.data.profile_img}
        description={home.data.bio_description}
      />
      <Portfollio images={portfolioImages} />
      <Location
        description={home.data.info_location}
        image={home.data.map_location}
      />
      <CallToAction whatsappPhone={whatsappPhone} />
      <Footer links={home.data.social_links} />
    </>
  );
}
