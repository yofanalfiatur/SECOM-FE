import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import ProgressBar from "@/components/Layouts/ProgressBar";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load messages for the selected locale
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <title>SECOM</title>
        <meta name="description" content="Website for SECOM" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ProgressBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
