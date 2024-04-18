import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Ashiks Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/3476/3476457.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
