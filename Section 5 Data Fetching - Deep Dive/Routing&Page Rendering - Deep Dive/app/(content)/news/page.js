import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
  const news = getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
