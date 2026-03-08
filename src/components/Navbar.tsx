import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { prewarmRoute } from "../utils/prefetchImages";
import { SITE_CONFIG, NAV_LINKS, ROUTES } from "../constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-zinc-100 px-4 pt-5">
      <nav className="w-full">
        <div className="flex items-center justify-between">
          <Link
            to={ROUTES.HOME}
            className="font-brand text-4xl leading-none text-zinc-900"
          >
            {SITE_CONFIG.name}
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to={ROUTES.CART}
              className="relative mr-5 inline-flex items-center justify-center rounded-md p-2 text-zinc-900 transition-opacity hover:opacity-70"
              aria-label="Shopping cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-300 text-xs font-bold text-zinc-900">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-900 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            <ul className="hidden items-center gap-10 text-sm font-semibold tracking-wide text-zinc-900 uppercase md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="transition-opacity hover:opacity-70"
                    onMouseEnter={() => prewarmRoute(link.href)}
                    onFocus={() => prewarmRoute(link.href)}
                    onTouchStart={() => prewarmRoute(link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="mt-4 flex flex-col gap-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase md:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block transition-opacity hover:opacity-70"
                  onMouseEnter={() => prewarmRoute(link.href)}
                  onFocus={() => prewarmRoute(link.href)}
                  onTouchStart={() => prewarmRoute(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 border-b border-zinc-700/50" />
      </nav>
    </header>
  );
}
