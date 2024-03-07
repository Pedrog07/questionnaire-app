import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAllTopics } from "../../topics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Questionnaire App",
  description: "Answer different topics questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  getAllTopics()
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center">
        {children}
        </div>
        </body>
    </html>
  );
}
