import type { Metadata } from "next";
// Google Font imports removed due to offline build constraints
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// Font imports disabled for offline build
const inter = { variable: "" };


// Font imports disabled for offline build
const plusJakartaSans = { variable: "" };


export const metadata: Metadata = {
  title: "Abdul Kader Khan | Full-Stack Web Developer",
  description:
    "Personal portfolio and developer showcase of Abdul Kader Khan, an aspiring Full-Stack Web Developer based in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        inter.variable,
        plusJakartaSans.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
