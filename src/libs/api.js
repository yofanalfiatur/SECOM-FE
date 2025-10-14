export async function getPageData(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/page/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        Accept: "application/json",
      },
      cache: "no-store", // biar selalu fresh
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page data");
  }

  return res.json();
}
