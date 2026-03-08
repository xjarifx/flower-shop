import {
  footerSection,
  galleryItems,
  heroSection,
  services,
  sliderImages,
} from "../data/siteData";

const EXTRA_ROUTE_IMAGES = ["/assets/owner.webp"];
const LOCAL_ASSET_PATTERN = /^\/assets\/.+\.(jpe?g|png|webp)(\?.*)?$/i;

type RoutePath = "/" | "/gallery" | "/about" | "/contract";

let hasStartedPrefetch = false;
const warmedSources = new Set<string>();
const activeImageRefs = new Set<HTMLImageElement>();

function toWebpSource(src: string) {
  return src.replace(/\.(jpe?g|png)(\?.*)?$/i, ".webp$2");
}

function supportsWebp() {
  try {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/webp").startsWith("data:image/webp");
  } catch {
    return false;
  }
}

function normalizeSource(src: string, useWebp: boolean) {
  if (useWebp && LOCAL_ASSET_PATTERN.test(src)) {
    return toWebpSource(src);
  }
  return src;
}

function dedupe(list: string[]) {
  return [...new Set(list)];
}

function getRouteImageMap(useWebp: boolean) {
  const shared = [footerSection.image_path];

  const routeImageSources: Record<RoutePath, string[]> = {
    "/": [
      heroSection.image_path,
      ...sliderImages.map((image) => image.image_path),
      "/assets/10.webp",
      "/assets/16.webp",
      "/assets/23.webp",
      "/assets/7.webp",
      ...shared,
    ],
    "/gallery": [
      ...galleryItems.map((item) => item.image_path),
      ...services.map((service) => service.image_path),
      "/assets/7.webp",
      ...shared,
    ],
    "/about": [
      "/assets/1.webp",
      "/assets/2.webp",
      "/assets/3.webp",
      "/assets/24.webp",
      ...EXTRA_ROUTE_IMAGES,
      ...shared,
    ],
    "/contract": ["/assets/5.webp", ...shared],
  };

  return Object.entries(routeImageSources).reduce(
    (accumulator, [route, sources]) => {
      accumulator[route as RoutePath] = dedupe(
        sources.map((src) => normalizeSource(src, useWebp)),
      );
      return accumulator;
    },
    {} as Record<RoutePath, string[]>,
  );
}

function prewarmOne(src: string, priority: "high" | "low" = "low") {
  if (warmedSources.has(src)) {
    return Promise.resolve();
  }

  const img = new Image();
  img.decoding = "async";
  img.loading = "eager";
  if ("fetchPriority" in img) {
    img.fetchPriority = priority;
  }

  activeImageRefs.add(img);

  return new Promise<void>((resolve) => {
    img.onload = async () => {
      try {
        if (typeof img.decode === "function") {
          await img.decode();
        }
      } catch {
      } finally {
        warmedSources.add(src);
        activeImageRefs.delete(img);
        resolve();
      }
    };

    img.onerror = () => {
      activeImageRefs.delete(img);
      resolve();
    };

    img.src = src;
  });
}

function scheduleTask(task: () => void) {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(task, { timeout: 1200 });
    return;
  }
  globalThis.setTimeout(task, 120);
}

function prewarmQueue(queue: string[], priority: "high" | "low") {
  const run = async () => {
    const batch = queue.splice(0, priority === "high" ? 4 : 2);
    await Promise.all(batch.map((src) => prewarmOne(src, priority)));

    if (queue.length > 0) {
      scheduleTask(run);
    }
  };

  run();
}

export function startBackgroundImagePrefetch() {
  if (hasStartedPrefetch || typeof window === "undefined") {
    return;
  }

  hasStartedPrefetch = true;
  const routeImageMap = getRouteImageMap(supportsWebp());

  const warmOrder: RoutePath[] = ["/", "/gallery", "/about", "/contract"];
  const queue = dedupe(warmOrder.flatMap((route) => routeImageMap[route]));

  prewarmQueue(queue, "low");
}

export function prewarmRoute(routePath: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (
    routePath !== "/" &&
    routePath !== "/gallery" &&
    routePath !== "/about" &&
    routePath !== "/contract"
  ) {
    return;
  }

  const routeImageMap = getRouteImageMap(supportsWebp());
  prewarmQueue([...routeImageMap[routePath]], "high");
}
