import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sri Sms Pharma",
  description: "Reach out to Sri Sms Pharma for your ophthalmic product inquiries and support.",
  alternates: {
    canonical: "https://www.srismspharma.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
