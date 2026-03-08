import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import OptimizedImage from "./OptimizedImage";

const featureImages = [
  { src: "/assets/1.webp", alt: "Pink stems" },
  { src: "/assets/2.webp", alt: "Red bloom" },
  { src: "/assets/3.webp", alt: "White petal" },
];

const introParagraphs = [
  "Growing up on her family's flower farm in Oregon, Lily learned everything about growing, cutting, and arranging fresh flowers. After moving to Miami, she saw an opportunity to bring farm-fresh blooms to the city—flowers that go from field to vase in days, not weeks.",
  "Today, Our Blooms is Miami's go-to flower shop for fresh, affordable arrangements. We work directly with local and regional growers to bring you the freshest flowers at the best prices, delivered right to your door.",
];

const closingParagraphs = [
  "What started as a small shop in downtown Miami has grown into a thriving business with thousands of happy customers. We're known for our fresh flowers, fast delivery, and friendly service.",
  "Whether you need a bouquet for a birthday, anniversary, or just to brighten someone's day, we're here to help. Order online or visit our shop.",
];

export default function AboutPage() {
  return (
    <section className="bg-zinc-100 px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-400">
        <h1 className="text-4xl font-extrabold text-zinc-900 uppercase sm:text-5xl">
          ABOUT
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-[6.5rem_1fr] md:gap-8">
          <p className="pt-1 text-[0.62rem] font-semibold tracking-wide text-zinc-700 uppercase">
            OUR STORY
          </p>

          <div>
            <div className="grid gap-5 md:grid-cols-[minmax(0,17rem)_1fr] md:items-start">
              <div className="overflow-hidden rounded-2xl">
                <OptimizedImage
                  src="/assets/owner.webp"
                  alt="Founder portrait"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div>
                <div className="text-[0.62rem]">
                  <p className="font-semibold tracking-wide text-zinc-700 uppercase">
                    LILY SMITH
                  </p>
                  <p className="mt-0.5 text-zinc-600">Founder</p>
                </div>
              </div>
            </div>
            <h2 className="mt-7 text-3xl leading-tight font-extrabold text-zinc-900 sm:text-4xl">
              Our Blooms started in 2018 when Lily Smith brought her family's flower farming tradition to Miami.
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {featureImages.map((image) => (
                <OptimizedImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              ))}
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-6 text-zinc-800 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <OptimizedImage
                src="/assets/24.webp"
                alt="Pink tulips"
                loading="lazy"
                decoding="async"
                className="aspect-[16/7] w-full object-cover"
              />
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-6 text-zinc-800 sm:text-base">
              {closingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              to={ROUTES.SHOP}
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-amber-300 px-3 py-1.5 text-[0.62rem] font-extrabold tracking-wide text-zinc-900 uppercase transition-opacity hover:opacity-85"
            >
              <span aria-hidden="true">•</span>
              <span>ORDER FLOWERS TODAY</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
