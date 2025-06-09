import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Ophthalmic Products | Sri Sms Pharma",
  description: "Specialized eye care products made in certified facilities. Trusted pharma wholesaler in South India for safe and effective ophthalmic solutions.",
  alternates: {
    canonical: "https://www.srismspharma.com/product",
  },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
