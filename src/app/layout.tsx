import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contentpadi | Share your ideas as blogs",
  description: "Contentpadi - Request content from your favourite creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
  </html>
  );
}
