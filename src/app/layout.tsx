import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const redHatItalic = localFont({
  src: "./fonts/RedHatText-Italic-VariableFont_wght.ttf",
  variable: "--font-red-hat-italic",
  weight: "100 900",
});
const redHat = localFont({
  src: "./fonts/RedHatText-VariableFont_wght.ttf",
  variable: "--font-red-hat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Challenge :: Product list with cart",
  description: "Practice updating the UI in multiple places based on user actions. The starter download also includes a JSON file to help you practice populating the DOM dynamically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${redHatItalic.variable} ${redHat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
