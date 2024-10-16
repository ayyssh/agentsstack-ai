import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";
import { getListPage } from "@lib/contentParser";
import IndustriesSection from "@layouts/partials/IndustriesSection";

const Home = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, howWeDo, features, intro, speciality, testimonial } =
    frontmatter;
  return (
    <GSAPWrapper>
      <SeoMeta title="Home" />
      <HomeBanner banner={banner} brands={brands} />
      <ShortIntro intro={intro} />
      <IndustriesSection/>
      <Features features={features} />
      {/* <SpecialFeatures speciality={speciality} />
      <Testimonial testimonial={testimonial} /> */}
      <Cta />
    </GSAPWrapper>
  );
};

export default Home;
