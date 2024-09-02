import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Jinganime",
  description: "Website Anime Sub Indoneia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressContentEditableWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
