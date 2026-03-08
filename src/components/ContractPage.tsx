import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const deliveryInfo = [
  "Same-day delivery available for orders placed before 2 PM.",
  "Free delivery on orders over $75 in Miami-Dade County.",
  "We deliver 7 days a week, including holidays.",
  "Delivery time slots: Morning (9 AM-12 PM) or Afternoon (1 PM-5 PM).",
  "Contact us for rush deliveries or specific time requests.",
];

const faqItems = [
  {
    title: "How fresh are your flowers?",
    details: "All flowers are cut fresh and delivered within 2-3 days of harvest. We work with local growers whenever possible.",
  },
  {
    title: "Can I customize my bouquet?",
    details: "Absolutely! Choose your flowers, colors, and size. Our florists will create it fresh to order.",
  },
  {
    title: "What's your return policy?",
    details: "We guarantee freshness for 7 days. If you're not satisfied, contact us within 24 hours for a replacement or refund.",
  },
  {
    title: "Do you do weddings or events?",
    details: "Yes! Contact us for custom quotes on weddings, corporate events, and large orders.",
  },
  {
    title: "How do I care for my flowers?",
    details: "Trim stems at an angle, change water daily, and keep away from direct sunlight and heat sources.",
  },
];

export default function ContractPage() {
  return (
    <section className="bg-zinc-100 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-400">
        <div className="rounded-3xl border border-zinc-300 bg-white/60 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wide text-zinc-600 uppercase">
            Customer Information
          </p>
          <h1 className="mt-2 text-4xl leading-tight font-extrabold text-zinc-900 uppercase sm:text-5xl">
            DELIVERY & FAQ
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-800 sm:text-base">
            Everything you need to know about ordering, delivery, and caring for your fresh flowers.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            <div className="overflow-hidden rounded-3xl">
              <OptimizedImage
                src="/assets/5.webp"
                alt="Fresh flower delivery"
                loading="lazy"
                decoding="async"
                className="h-96 w-full object-cover sm:h-128"
              />
            </div>

            <div className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7">
              <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
                Delivery Information
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-800">
                {deliveryInfo.map((term) => (
                  <li key={term} className="flex items-start gap-2">
                    <span className="pt-1 text-zinc-500">•</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-sm bg-amber-300 px-3 py-1.5 text-xs font-extrabold tracking-wide text-zinc-900 uppercase transition-opacity hover:opacity-85"
                >
                  <span aria-hidden="true">•</span>
                  <span>Shop Flowers</span>
                </Link>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7">
            <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
              Frequently Asked
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              Common questions about our flowers, delivery, and services.
            </p>

            <ol className="mt-5 space-y-4">
              {faqItems.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[1.8rem_1fr] gap-3"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-400 text-xs font-bold text-zinc-800">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-zinc-700">
                      {item.details}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
