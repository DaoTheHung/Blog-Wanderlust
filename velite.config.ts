import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { defineCollection, defineConfig, s } from "velite"

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
})



const travelBlog = defineCollection({
  name: "DiemDen",
  pattern: "diem-den/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      id: s.string(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.string(),
      image: s.string(),
      author: s.string(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

const newsBlog = defineCollection({
  name: "TinTuc",
  pattern: "tin-tuc/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      id: s.string(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.string(),
      image: s.string(),
      author: s.string(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

const tipTravelBlog = defineCollection({
  name: "TipsDuLich",
  pattern: "tips-du-lich/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      id: s.string(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.string(),
      image: s.string(),
      author: s.string(),
      body: s.mdx(),
    })
    .transform(computedFields),
})



export default defineConfig({
  root: "src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { travelBlog, newsBlog, tipTravelBlog },
  mdx: {
    rehypePlugins: [
      rehypeSlug as any,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})