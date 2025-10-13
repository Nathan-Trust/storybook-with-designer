import Demo from "@/components/ui/demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boifiok.ng | Home",
  description:
    "Order agricultural products, grains, tubers, and more from Boifiok.ng. Fast, reliable, and secure marketplace for Nigerian food and produce.",
  openGraph: {
    title: "Boifiok.ng | Home",
    description:
      "Order agricultural products, grains, tubers, and more from Boifiok.ng. Fast, reliable, and secure marketplace for Nigerian food and produce.",
    url: "https://boifiok.ng/",
    siteName: "Boifiok.ng",
    images: [
      {
        url: "/footer/boifiok-footer-bg.svg",
        width: 1200,
        height: 630,
        alt: "Boifiok.ng",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boifiok.ng | Home",
    description:
      "Order agricultural products, grains, tubers, and more from Boifiok.ng. Fast, reliable, and secure marketplace for Nigerian food and produce.",
    site: "@boifiok_ng",
    images: ["/footer/boifiok-footer-bg.svg"],
  },
};

export default function Home() {
  return <Demo />;
}
