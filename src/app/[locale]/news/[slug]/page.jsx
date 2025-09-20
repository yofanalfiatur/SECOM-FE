"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const t = useTranslations();
  const newsList = t.raw("NewsSingle");

  const news = newsList.find((item) => item.slug === params.id);

  if (!news) {
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <span>{news.author}</span>
        <span>•</span>
        <span>{new Date(news.publishedDate).toLocaleDateString()}</span>
      </div>
      <Image
        src={news.featuredImage}
        alt={news.title}
        width={1600}
        height={1000}
        className="rounded-xl mb-6"
      />
      <div
        dangerouslySetInnerHTML={{ __html: news.content }}
        className="prose prose-lg"
      />
    </section>
  );
}
