"use client"; // This marks the file as a client component
import localFont from "next/font/local";
import Navbar from "./components/navbar/Navbar";  // Import Navbar
import "./globals.css"; // Ensure global styles are applied
import Footer from "./components/footer/Footer";

// Load custom fonts using `next/font/local`
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Path to custom font
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Path to custom font
  variable: "--font-geist-mono",
  weight: "100 900",
});

// The RootLayout component wraps the entire application and applies global styles
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN for icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
        />
        <title>CADD Manchester</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-black`}  // Flex layout to ensure footer is at the bottom
      >
        {/* Navbar is included globally, so it's present on all pages */}
        <Navbar />
        
        {/* Main content is injected here */}
        <main className="flex-grow">{children}</main> 

        {/* Footer will always be at the bottom of the page */}
        <Footer/>
      </body>
    </html>
  );
}
