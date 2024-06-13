import ArticleSection from "./sections/articleSection";
import Header from "./components/nav"

export default function ArticleView() {
  return (
    <div>
      <Header />
      <div>
        <ArticleSection />
      </div>
    </div>
  );
}