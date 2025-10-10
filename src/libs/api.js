export async function getPageData(slug) {
  const res = await fetch(
    `https://api.secom.madebystucel.com/v1/page/${slug}`,
    {
      headers: {
        Authorization: `Bearer 1|L0r3zf67WEccE0jv1tzNR1pCzwR3YASQDombpVfV7941d1a7`,
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
