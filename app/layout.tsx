import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Sosobad | Team Hub",
  description: "Schedule, locations, and availability for Real Sosobad.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
