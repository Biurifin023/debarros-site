import AboutSection from "./components/about.section";
import HeroSection from "./components/hero-section";
import Portfollio from "./components/portfolio";
import Location from "./components/location";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import { createClient } from "@/prismicio";

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

  console.log(home.data);

  return (
    <>
      <HeroSection image={home.data.hero_image} />
      <AboutSection
        image={home.data.profile_img}
        description={home.data.bio_description}
      />
      <Portfollio images={portfolioImages} />
      <Location
        description={home.data.info_location}
        image={home.data.map_location}
      />
      <CallToAction />
      <Footer links={home.data.social_links} />
    </>
  );
}
