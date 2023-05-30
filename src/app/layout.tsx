import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog",
  description: "Study NEXT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.className} py-5 px-14`}>
        <Header />
        <section>{children}</section>
      </body>
    </html>
  );
}
