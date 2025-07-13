import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./navbar";



export const metadata: Metadata = {
  title: "Revanth",
  description: "Portfolio of Revanth",
   icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
