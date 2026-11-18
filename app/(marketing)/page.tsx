import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Home page</h2>
      <Link href="/articles">Go to Articles</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
    </>
  );
}
