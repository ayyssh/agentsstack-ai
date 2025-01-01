import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";
import { getListPage } from "@lib/contentParser";

import SimpleTextSection from "@layouts/partials/SimpleTextSection";


const Home = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, howWeDo, features, intro, speciality, testimonial } =
    frontmatter;
  return (
    <GSAPWrapper>
      <SeoMeta title="Agentsstack" />
      <HomeBanner banner={banner} brands={brands} />
      <SimpleTextSection content={intro} />
      
      
      <Cta />
      
      <Features features={features} />
      {/* <SpecialFeatures speciality={speciality} />
      <Testimonial testimonial={testimonial} /> */}
      
    </GSAPWrapper>
  );
};

export default Home;
