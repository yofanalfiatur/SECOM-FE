import "./globals.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import ButtonWa from "@/components/Elements/ButtonWa";

export const metadata = {
  title: "SECOM",
  description: "Website for SECOM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ButtonWa />
      </body>
    </html>
  );
}
