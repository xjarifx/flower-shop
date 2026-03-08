import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

type AboutProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  sectionClassName?: string;
};

export default function About({
  id = "about",
  eyebrow = "WHO WE ARE",
  title = "Miami's favorite flower shop. Fresh flowers, delivered with care, every single day.",
  ctaLabel = "SHOP NOW",
  ctaHref = ROUTES.SHOP,
  sectionClassName = "bg-zinc-100 px-4 py-24 sm:py-28",
}: AboutProps) {
  return (
    <section id={id} className={sectionClassName}>
      <div className="mx-auto max-w-400 text-center">
        <p className="text-sm font-extrabold tracking-wide text-zinc-700 uppercase">
          {eyebrow}
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.1] font-extrabold text-zinc-900">
          {title}
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-2 rounded-md bg-amber-300 px-5 py-2.5 text-base font-extrabold text-zinc-900 transition-opacity hover:opacity-85"
          >
            <span aria-hidden="true">•</span>
            <span>{ctaLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
