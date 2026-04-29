import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antoine Electric Marseille | Électricien rue d’Adoume",
  description:
    "Antoine Electric Marseille : dépannage, installation, mise aux normes et réservation d’intervention à Marseille rue d’Adoume.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
