import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    "titleImage": titleImage.asset._ref,
    "content": content[0].children[0].text,
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard = await getData();
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
