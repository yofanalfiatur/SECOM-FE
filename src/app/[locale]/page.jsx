import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Link href="/en">English</Link>
    </>
  );
}
