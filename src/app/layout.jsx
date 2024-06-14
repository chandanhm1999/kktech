import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { metadata } from "./layoutMetadata";

// importing slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other metadata here */}
        {Object.entries(metadata.icons).map(([key, value]) => (
          <link key={key} rel="icon" href={value[0]} />
        ))}
        <link rel="apple-touch-icon" href={metadata.icons.apple[0]} />
        <meta name="keywords" content={metadata.keywords.join(",")} />
        <meta
          name="author"
          content={metadata.authors.map((author) => author.name).join(",")}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
