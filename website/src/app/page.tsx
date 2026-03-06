import { fetchReadme, parseReadme } from "@/lib/parse-readme";
import { ResourceList } from "@/components/resource-list";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Home() {
  const markdown = await fetchReadme();
  const sections = parseReadme(markdown);

  return <ResourceList sections={sections} />;
}
