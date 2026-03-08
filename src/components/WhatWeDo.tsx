import OptimizedImage from "./OptimizedImage";

const services = [
  {
    number: "1",
    image: "/assets/10.webp",
    title: "SAME-DAY DELIVERY",
    description: "Need flowers today? We've got you covered. Order by 2 PM for same-day delivery anywhere in Miami. Fresh blooms at your door in hours.",
  },
  {
    number: "2",
    image: "/assets/16.webp",
    title: "SUBSCRIPTION BOXES",
    description:
      "Fresh flowers, delivered on your schedule. Choose weekly or monthly subscriptions and enjoy handpicked seasonal arrangements without lifting a finger.",
  },
  {
    number: "3",
    image: "/assets/23.webp",
    title: "CUSTOM BOUQUETS",
    description:
      "Make it yours. Pick your flowers, choose your colors, and we'll create a one-of-a-kind bouquet that's exactly what you envisioned.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-zinc-100 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            HOW IT WORKS
          </h2>
          <p className="mt-2 text-xs text-zinc-700 sm:text-sm">
            Fresh flowers made simple. Browse, order, and enjoy.
          </p>
        </div>

        <div className="mt-8 border-t border-zinc-300" />

        {services.map((service, index) => (
          <article key={service.title} className="text-center">
            <div className="py-10">
              <p className="text-4xl leading-none font-bold text-zinc-900">
                {service.number}
              </p>

              <OptimizedImage
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="mx-auto mt-6 h-24 w-24 rounded-xl object-cover"
              />

              <h3 className="mx-auto mt-7 max-w-3xl text-[clamp(1.7rem,4vw,2.6rem)] leading-tight font-extrabold text-zinc-900">
                {service.title}
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-zinc-700 sm:text-sm">
                {service.description}
              </p>
            </div>

            {index < services.length - 1 && (
              <div className="border-b border-zinc-300" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
