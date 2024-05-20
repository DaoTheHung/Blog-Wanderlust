import { notFound } from 'next/navigation';
import { H1Block, H2Block, ImageBlock, PBlock } from '@/components/post-block';
import Markdown from 'markdown-to-jsx';
import { newsBlog } from '#side/content';
import { Mdx } from "@/components/mdx-components"
interface PageProps {
	params: {
		slug: string[]
	}
}
export default async function Page({ params }: PageProps) {
	const post = await getPageFromParams(params)

	if (!post) {
		notFound()
	}
	return (
		<div className="px-3 lg:px-0 w-full md:w-[750px] mx-auto  lg:w-[794px]">
			<div className="flex justify-center items-center flex-col">
				<div className="flex justify-center items-center flex-col gap-4 w-full">
					<div className="text-xl lg:text-4xl font-bold">
						{post.title}
					</div>
					<div className="text-xl font-bold">
						{post.description}
					</div>
					<div className="">
						<Mdx code={post.body} />
					</div>

					<div className="w-full text-end font-bold  lg:text-xl">
						{post.author}
					</div>
				</div>
			</div>
		</div>
	);
}



async function getPageFromParams(params: any) {
	const slug = params?.slug?.join("/")
	const page = newsBlog.find((page) => page.slugAsParams === slug)

	if (!page) {
		null
	}

	return page
}


export async function generateStaticParams(): Promise<PageProps["params"][]> {
	const slug = newsBlog.map((page) => ({
		slug: page.slugAsParams.split("/"),
	}))
	return slug
}