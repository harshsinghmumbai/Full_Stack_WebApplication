import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Full-Stack Web Application",
  description:
    "Created a full-stack web app, including the front-end, back-end, and databases, using Next.js as the full-stack framework.",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[1400px] m-auto">
            <Header />
            {children}
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
