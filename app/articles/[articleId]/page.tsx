import Link from "next/link";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <h2>News Article page {articleId}</h2>
      Reading in {lang === "fr" ? "French" : "English"}
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
