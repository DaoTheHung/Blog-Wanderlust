import { notFound, redirect } from 'next/navigation';
import { getPost, getPosts } from '@/lib/lib';
import { H1Block, H2Block, ImageBlock, PBlock } from '@/components/post-block';
import Markdown from 'markdown-to-jsx';
import { TPost } from '@/types';

import fs from 'fs'
import matter from "gray-matter"

type Tdata = {
	params: {
		id: string
	}
}
export default function Page({ params }: Tdata) {

	const slug = params.id
	const post = getPostContent(slug)
	return (
		<div className="px-3 lg:px-0 w-full md:w-[750px] mx-auto  lg:w-[794px]">
			<div className="flex justify-center items-center flex-col">
				{slug}
				{/* <div className="flex justify-center items-center flex-col gap-4 w-full">
					<div className="text-xl lg:text-4xl font-bold">
						{post.data.title}
					</div>
					<div className="text-xl font-bold">
						{post.data.description}
					</div>
					<div className="">
						<Markdown
							options={{
								overrides: {
									h1: H1Block,

									p: PBlock,
									image: ImageBlock
								}
							}}
						>
							{post.content}
						</Markdown>
					</div>

					<div className="w-full text-end font-bold  lg:text-xl">
						{post.data.author}
					</div>
				</div> */}
			</div>
		</div>
	);
}


function getPostContent(slug: string) {
	try {
		const folder = 'posts/am-thuc/';
		const file = folder + `${slug}.mdx`;
		const content = fs.readFileSync(file, 'utf8');
		const matterResult = matter(content);
		return matterResult;
	} catch (error) {
		console.error(error);
		throw error; // Ném lại lỗi để được xử lý bởi mã gọi
	}
}




export async function generateStaticParams() {
	const posts = await getPosts('am-thuc');
	return posts.map((post) => ({
		slug: post.id,
	}))
}
