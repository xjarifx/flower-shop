import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OptimizedImage from "./OptimizedImage";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <section className="bg-zinc-100 px-4 py-20">
        <div className="mx-auto max-w-400 text-center">
          <div className="rounded-3xl border border-zinc-300 bg-white/60 p-12">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-300/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-10 w-10 text-zinc-900"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold text-zinc-900 uppercase">
              Thank you for shopping with us!
            </h1>
            <p className="mt-4 text-base text-zinc-700">
              Payment Successful. Your order is being processed and will be
              delivered soon.
            </p>
            <Link
              to="/gallery"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-300 px-5 py-3 text-sm font-extrabold text-zinc-900 uppercase transition-opacity hover:opacity-85"
            >
              <span aria-hidden="true">•</span>
              <span>Shop More Flowers</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-zinc-100 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-400">
        <h1 className="text-4xl font-extrabold text-zinc-900 uppercase sm:text-5xl">
          Shopping Cart
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.4fr]">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-zinc-300 bg-white/70 p-4 sm:p-6"
              >
                <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
                  <div className="overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src={item.image_path}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-black text-zinc-900 uppercase">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-zinc-700">
                        {item.price}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-400 text-zinc-900 transition-opacity hover:opacity-70"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-400 text-zinc-900 transition-opacity hover:opacity-70"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-semibold text-red-600 transition-opacity hover:opacity-70"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7 lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
              Order Summary
            </h2>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-700">Subtotal</span>
                <span className="font-semibold text-zinc-900">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-700">Delivery</span>
                <span className="font-semibold text-zinc-900">
                  {getCartTotal() >= 75 ? "FREE" : "$9.99"}
                </span>
              </div>
              <div className="border-t border-zinc-300 pt-3">
                <div className="flex justify-between text-base">
                  <span className="font-bold text-zinc-900">Total</span>
                  <span className="font-bold text-zinc-900">
                    $
                    {(
                      getCartTotal() + (getCartTotal() >= 75 ? 0 : 9.99)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {getCartTotal() < 75 && (
              <p className="mt-4 text-xs text-zinc-600">
                Add ${(75 - getCartTotal()).toFixed(2)} more for free delivery!
              </p>
            )}

            <Link
              to="/checkout"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-amber-300 px-5 py-3 text-sm font-extrabold text-zinc-900 uppercase transition-opacity hover:opacity-85"
            >
              <span aria-hidden="true">•</span>
              <span>Proceed to Checkout</span>
            </Link>

            <Link
              to="/gallery"
              className="mt-3 block text-center text-sm font-semibold text-zinc-700 transition-opacity hover:opacity-70"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
