import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Sidebar from "./components/sidebar";
import { Provider } from "react-redux";
import store from './redux/Store'
import { ReduxProvider } from "./redux/provider";

const lexend_Deca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap"
});

const myFont = localFont({
  src: './font/LexendDeca-Bold.ttf',
  display: "swap",
})




export const metadata: Metadata = {
  title: "My Next App",
  description: "ToDo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ReduxProvider>
        <div><Sidebar /></div>
        <main className="grow">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
