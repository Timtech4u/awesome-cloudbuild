export interface Resource {
  title: string;
  url: string;
  description?: string;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  resources: Resource[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

function parseLinkLine(line: string): Resource | null {
  // Match markdown links: - [title](url) optional description
  const match = line.match(/^-\s+\[([^\]]+)\]\(([^)]+)\)\s*(.*)?$/);
  if (!match) return null;
  return {
    title: match[1].trim(),
    url: match[2].trim(),
    description: match[3]?.trim() || undefined,
  };
}

export function parseReadme(markdown: string): Section[] {
  const lines = markdown.split("\n");
  const sections: Section[] = [];
  let current: Section | null = null;
  let descriptionLines: string[] = [];

  for (const line of lines) {
    // Match ## headings (skip # h1)
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      // Save any accumulated description to previous section
      if (current && descriptionLines.length > 0) {
        const desc = descriptionLines
          .filter((l) => !l.startsWith("-") && !l.startsWith("["))
          .join(" ")
          .trim();
        if (desc && !current.description) {
          current.description = desc;
        }
      }
      descriptionLines = [];

      const title = headingMatch[1]
        .replace(/\[!\[.*?\]\(.*?\)\]\(.*?\)/g, "")
        .trim();

      // Skip "Contents" and "What is Cloud Build?" sections
      if (title === "Contents" || title === "What is Cloud Build?") {
        current = null;
        continue;
      }

      current = {
        id: slugify(title),
        title,
        resources: [],
      };
      sections.push(current);
      continue;
    }

    if (!current) continue;

    const resource = parseLinkLine(line.trim());
    if (resource) {
      current.resources.push(resource);
    } else if (line.trim() && !line.startsWith("#") && !line.startsWith("```")) {
      // Accumulate non-link, non-heading lines as potential description
      const cleaned = line.trim();
      if (
        cleaned.length > 20 &&
        !cleaned.startsWith("|") &&
        !cleaned.startsWith("-") &&
        !cleaned.startsWith("Also") &&
        !cleaned.startsWith("Architecture") &&
        !cleaned.startsWith("Why this") &&
        !cleaned.startsWith("Cloud Build") &&
        !cleaned.startsWith("Important") &&
        !cleaned.startsWith("If you") &&
        !cleaned.startsWith("Community") &&
        !cleaned.startsWith("Supported") &&
        !cleaned.startsWith("The templates")
      ) {
        descriptionLines.push(cleaned);
      }
    }
  }

  // Filter out empty sections
  return sections.filter((s) => s.resources.length > 0);
}

export async function fetchReadme(): Promise<string> {
  const res = await fetch(
    "https://api.github.com/repos/Timtech4u/awesome-cloudbuild/contents/readme.md",
    {
      headers: { Accept: "application/vnd.github.v3.raw" },
      next: { revalidate: 3600 }, // Revalidate every hour
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch readme: ${res.status}`);
  return res.text();
}
