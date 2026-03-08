// Site Configuration
export const SITE_CONFIG = {
  name: "Our Blooms",
  location: "Miami, FL",
  freeDeliveryThreshold: 75,
  deliveryFee: 9.99,
  sameDayOrderCutoff: "2 PM",
} as const;

// Routes
export const ROUTES = {
  HOME: "/",
  SHOP: "/gallery",
  ABOUT: "/about",
  DELIVERY_FAQ: "/contract",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDER_SUCCESS: "/order-success",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: ROUTES.HOME, label: "Home" },
  { href: ROUTES.SHOP, label: "Shop" },
  { href: ROUTES.ABOUT, label: "About" },
  { href: ROUTES.DELIVERY_FAQ, label: "Delivery & FAQ" },
] as const;
