import React from "react";
import { Darker_Grotesque } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/ui";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: '300', });

export const metadata = {
  title: "Portfolio - Lynn Chen",
  description: "Photography Portfolio of Lynn Chen",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={darker.className}>
        <div className="viewport">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}; 