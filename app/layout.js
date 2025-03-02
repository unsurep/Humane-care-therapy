import { Nunito, Delius } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Humane Care Therapy",
  description: "Humahe Care Therapy Inc. Your Trusted Partner in Therapy Staffing. At Humane Care Therapy Inc. we deliver comprehensive staffing solutions that meet every therapy need. Our expert team provides specialized, compassionate therapy services that restores, strengthen, and heal- empowering patients to acheive an elevated quality of life. Schedule an appiontment today and experience exceptional care designed to make a real difference",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${nunito.variable} ${delius.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
