import { createClient, EntryCollection } from "contentful";
import { TypeBlogFields, TypeBlog } from "@/types/contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
});

export async function fetchArticle(): Promise<TypeBlog[]> {
  try {
    const data: EntryCollection<TypeBlogFields> = await client.getEntries<TypeBlogFields>({
      content_type: "blog" // Replace with your content type ID
    });
    console.log(data.items[0].fields);

    return data.items;
  } catch (err) {
    console.error(err);
    return [];
  }
}
