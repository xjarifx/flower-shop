import { Link } from "react-router-dom";

export default function OrderSuccessPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-100 px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-3xl border border-zinc-300 bg-white/60 p-8 sm:p-12">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-10 w-10 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-5xl font-extrabold text-zinc-900 uppercase sm:text-6xl">
            Thank You!
          </h1>

          <p className="mt-6 text-lg leading-7 text-zinc-700 sm:text-xl">
            Your order has been placed successfully. We're preparing your fresh flowers for delivery!
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-300 bg-zinc-50 p-6">
            <p className="text-xs font-semibold tracking-wide text-zinc-600 uppercase">
              Order Number
            </p>
            <p className="mt-2 text-2xl font-bold text-zinc-900">
              #{orderNumber}
            </p>
            <p className="mt-3 text-sm text-zinc-600">
              A confirmation email has been sent to your inbox.
            </p>
          </div>

          <div className="mt-8 space-y-2 text-sm text-zinc-700">
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Order confirmed</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Payment processed</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Delivery scheduled</span>
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="text-base font-semibold text-zinc-900">
              Love fresh flowers?
            </p>
            <p className="mt-2 text-sm text-zinc-700">
              Come back anytime to brighten your day or surprise someone special. We're always here with fresh blooms!
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-md bg-amber-300 px-6 py-3 text-sm font-extrabold text-zinc-900 uppercase transition-opacity hover:opacity-85"
            >
              <span aria-hidden="true">•</span>
              <span>Shop More Flowers</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-md border-2 border-zinc-400 px-6 py-3 text-sm font-extrabold text-zinc-900 uppercase transition-opacity hover:opacity-75"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
