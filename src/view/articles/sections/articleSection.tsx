import { fetchArticle } from "@/utils/contentful";
import { TypeBlog } from "@/types/contentful";
import Image from "next/image";
import RichText from "../components/richText";

export default async function ArticleSection() {
  const articles: TypeBlog[] = await fetchArticle();

  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article) => (
          <div key={article.sys.id} className="mt-10">
            <Image
              alt="image"
              src={`https:${article.fields.articleImage.fields.file.url}`}
              className="mx-auto"
              width={720}
              height={720}
            />
            <p>{article.fields.createdAt}</p>
            <p className="text-3xl mb-5">{article.fields.title}</p>
            <p className="text-2xl">{article.fields.summary}</p>
            <RichText document={article.fields.details} />
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}
