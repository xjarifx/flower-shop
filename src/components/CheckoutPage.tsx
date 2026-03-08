import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate("/order-success");
    }, 2000);
  };

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const total = getCartTotal() + (getCartTotal() >= 75 ? 0 : 9.99);

  return (
    <section className="bg-zinc-100 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-400">
        <h1 className="text-4xl font-extrabold text-zinc-900 uppercase sm:text-5xl">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.4fr]">
          <div className="space-y-6">
            {/* Delivery Information */}
            <div className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7">
              <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
                Delivery Information
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-zinc-700 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-zinc-700 uppercase">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                  placeholder="(305) 555-0123"
                />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-zinc-700 uppercase">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-zinc-700 uppercase">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                    placeholder="Miami"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                    placeholder="33101"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-zinc-700 uppercase">
                  Delivery Time
                </label>
                <select
                  required
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                >
                  <option value="">Select time slot</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                </select>
              </div>
            </div>

            {/* Payment Information */}
            <div className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7">
              <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
                Payment Information
              </h2>

              <div className="mt-6">
                <label className="block text-xs font-semibold text-zinc-700 uppercase">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                  placeholder="4242 4242 4242 4242"
                  maxLength={19}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-300 focus:outline-none"
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-zinc-600">
                🔒 This is a demo checkout. No real payment will be processed.
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7 lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
              Order Summary
            </h2>

            <div className="mt-6 space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-zinc-700">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold text-zinc-900">
                    ${(parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-zinc-300 pt-4 text-sm">
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
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-amber-300 px-5 py-3 text-sm font-extrabold text-zinc-900 uppercase transition-opacity hover:opacity-85 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span aria-hidden="true">•</span>
                  <span>Place Order</span>
                </>
              )}
            </button>
          </aside>
        </form>
      </div>
    </section>
  );
}
