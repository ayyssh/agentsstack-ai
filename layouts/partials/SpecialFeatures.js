import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";
import { markdownify } from "@lib/utils/textConverter";

const SpecialFeatures = ({ speciality }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src={speciality.primary.image}
              width={575}
              height={511}
              alt="primary speciality"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>{speciality.primary.subtitle}</p>
            {markdownify(
              speciality.primary.title,
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(speciality.primary.description, "p", "mt-10")}
            <Link href={speciality.primary.buttonLink} className="btn btn-primary mt-4">
              Learn More
            </Link>
          </div>
        </div>
        <div className="row items-center">
          <div className="animate lg:col-6">
            <ImageFallback
              className="mx-auto"
              src={speciality.secondary.image}
              width={575}
              height={511}
              alt="secondary speciality"
            />
          </div>
          <div className="animate lg:col-5">
            <p>{speciality.secondary.subtitle}</p>
            {markdownify(
              speciality.secondary.title,
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(speciality.secondary.description, "p", "mt-10")}
            <Link href={speciality.secondary.buttonLink} className="btn btn-primary mt-4">
              Learn More
            </Link>
          </div>
        </div>
        <div className="row items-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src={speciality.tertiary.image}
              width={575}
              height={511}
              alt="tertiary speciality"
            />
          </div>
          <div className="animate lg:col-5">
            <p>{speciality.tertiary.subtitle}</p>
            {markdownify(
              speciality.tertiary.title,
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(speciality.tertiary.description, "p", "mt-10")}
            <Link href={speciality.tertiary.buttonLink} className="btn btn-primary mt-4">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
