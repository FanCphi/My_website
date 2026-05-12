import { Client } from "@notionhq/client";
import type { Article, ArticleCategory } from "@/types/article";
import type { Project, ProjectStatus } from "@/types/project";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const ARTICLES_DB_ID = process.env.NOTION_ARTICLES_DB_ID!;
const PROJECTS_DB_ID = process.env.NOTION_PROJECTS_DB_ID!;

// Notion rich_text[] → plain string
function richTextToPlain(richText: { plain_text: string }[]): string {
  return richText.map((t) => t.plain_text).join("");
}

// Notion blocks → Markdown string
async function getBlocksAsMarkdown(pageId: string): Promise<string> {
  const blocks: string[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    for (const block of response.results) {
      if (!("type" in block)) continue;
      const md = blockToMarkdown(block);
      if (md) blocks.push(md);
    }

    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return blocks.join("\n\n");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function blockToMarkdown(block: any): string {
  const { type } = block;
  const data = block[type];

  if (!data) return "";

  switch (type) {
    case "heading_1":
      return `# ${richTextToPlain(data.rich_text)}`;
    case "heading_2":
      return `## ${richTextToPlain(data.rich_text)}`;
    case "heading_3":
      return `### ${richTextToPlain(data.rich_text)}`;
    case "paragraph":
      return richTextToPlain(data.rich_text);
    case "bulleted_list_item":
      return `- ${richTextToPlain(data.rich_text)}`;
    case "numbered_list_item":
      return `1. ${richTextToPlain(data.rich_text)}`;
    case "quote":
      return `> ${richTextToPlain(data.rich_text)}`;
    case "code":
      return `\`\`\`${data.language ?? ""}\n${richTextToPlain(data.rich_text)}\n\`\`\``;
    case "divider":
      return "---";
    default:
      return richTextToPlain(data.rich_text ?? []);
  }
}

// Extract Notion database property value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getProp(page: any, name: string): any {
  const prop = page.properties[name];
  if (!prop) return null;
  return prop;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPlainText(page: any, name: string): string {
  const prop = getProp(page, name);
  if (!prop) return "";
  if (prop.type === "rich_text") return richTextToPlain(prop.rich_text);
  if (prop.type === "title") return richTextToPlain(prop.title);
  return "";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getSelect(page: any, name: string): string | null {
  const prop = getProp(page, name);
  if (!prop) return null;
  if (prop.type === "select" && prop.select) return prop.select.name;
  if (prop.type === "status" && prop.status) return prop.status.name;
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMultiSelect(page: any, name: string): string[] {
  const prop = getProp(page, name);
  if (!prop || prop.type !== "multi_select") return [];
  return prop.multi_select.map((s: { name: string }) => s.name);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDate(page: any, name: string): string {
  const prop = getProp(page, name);
  if (!prop || prop.type !== "date" || !prop.date) return "";
  return prop.date.start;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getUrl(page: any, name: string): string | undefined {
  const prop = getProp(page, name);
  if (!prop || prop.type !== "url" || !prop.url) return undefined;
  return prop.url;
}

export async function getArticles(): Promise<Article[]> {
  const response = await notion.databases.query({
    database_id: ARTICLES_DB_ID,
    filter: {
      property: "Status",
      status: { equals: "完成" },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  const articles: Article[] = [];

  for (const page of response.results) {
    if (!("properties" in page)) continue;

    const category = getSelect(page, "Category")?.toLowerCase() as ArticleCategory | undefined;
    if (!category) continue;

    const content = getPlainText(page, "Content");

    articles.push({
      id: page.id,
      title: getPlainText(page, "Title"),
      summary: getPlainText(page, "Summary"),
      content,
      category,
      tags: getMultiSelect(page, "Tags"),
      date: getDate(page, "Date"),
    });
  }

  return articles;
}

export async function getProjects(): Promise<Project[]> {
  const response = await notion.databases.query({
    database_id: PROJECTS_DB_ID,
    sorts: [{ property: "Name", direction: "ascending" }],
  });

  return response.results
    .filter((page) => "properties" in page)
    .map((page) => {
      const status = getSelect(page, "Status") as ProjectStatus | null;
      return {
        id: page.id,
        name: getPlainText(page, "Name"),
        status: status ?? "active",
        description: getPlainText(page, "Description"),
        tags: getMultiSelect(page, "Tags"),
        github: getUrl(page, "GitHub"),
        demo: getUrl(page, "Demo"),
      };
    });
}
