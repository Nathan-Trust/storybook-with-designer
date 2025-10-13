import Footer from "@/components/shared/footer";
import Button from "@/components/ui/button";
import ButtonGroup from "@/components/ui/buttongroup";
import Heart3Line from "@/icon/Heart3Line";
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
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        size={2}
        color="Brand"
        button="Process Order of N12,000"
        // leadingIcon={<Image src="/path/to/icon.svg" alt="Icon" />}
        showLeadingIcon
        // trailingIcon={<Image src="/path/to/icon.svg" alt="Icon" />}
        variant="Solid"
      />
      {/* button group */}
      <ButtonGroup
        typeVariant="Group"
        size={2}
        color="Brand"
        variant="Solid"
        buttons={[
          {
            id: "like",
            button: "Like",
            leadingIcon: <Heart3Line />,
            showLeadingIcon: true,
          },
          {
            id: "share",
            button: "Share",
            trailingIcon: <Heart3Line />,
            showTrailingIcon: true,
          },
          {
            id: "comment",
            button: "Comment",
            leadingIcon: <Heart3Line />,
            showLeadingIcon: true,
            trailingIcon: <Heart3Line />,
            showTrailingIcon: true,
          },
        ]}
      />
      <Footer />
    </main>
  );
}
