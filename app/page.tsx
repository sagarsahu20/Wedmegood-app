import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Sidebar from "./components/sidebar";

export const lexend_Deca = Lexend_Deca({ subsets: ["latin"], weight: ["500"],
display: "swap"

});

const inter = Inter({ subsets: ["latin"], weight: ['400',"500"],
});

const myFont = localFont({ 
  src: './font/LexendDeca-Bold.ttf',
  display: "swap",
})



const Page = () => {
  return (
    <html lang="en">
      <body className={myFont.className}>
      
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "My next app",
  description: "Todo",
};

export default Page;

