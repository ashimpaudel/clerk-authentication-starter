
import { Metadata } from "next";

export const templateMetadata: Metadata = {
  metadataBase: new URL("https://ecotech-store.vercel.app/"),
  title: "EcoTech - Sustainable Technology for a Better Tomorrow",
  description:
    "Discover eco-friendly technology products that don't compromise on performance. Solar chargers, biodegradable cases, and sustainable gadgets.",
  openGraph: { images: ["/og.png"] },
};

// Default metadata for when template is removed
export const defaultMetadata: Metadata = {
  title: "EcoTech Store",
  description: "Sustainable technology products for conscious consumers",
};
