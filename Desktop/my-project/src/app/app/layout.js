import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learnedze Networks",
  description:
    "Learnedze Networks is an ed-tech company based out of India. Learnedze provides on-demand labs as a service to organizations in the networking industry. Focusing on technology learning labs, sandbox labs, proof of concept labs & demos, training & consulting on networking technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
