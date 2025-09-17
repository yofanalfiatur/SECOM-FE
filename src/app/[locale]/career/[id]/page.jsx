"use client";

import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function CareerDetailPage({ params }) {
  const t = useTranslations();
  //   const careerDetails = t.raw("CareerDetail"); // ambil array CareerDetail
  //   const career = careerDetails.find((c) => c.id === params.id);

  //   if (!career) {
  //     notFound();
  //   }

  return (
    <section className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Career Detail Test</h1>
    </section>
  );
}
