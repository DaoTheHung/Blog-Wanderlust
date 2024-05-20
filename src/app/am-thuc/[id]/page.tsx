import { notFound, redirect } from 'next/navigation';
import { getPost, getPosts } from '@/lib/lib';
import { H1Block, H2Block, ImageBlock, PBlock } from '@/components/post-block';
import Markdown from 'markdown-to-jsx';
import { convertToSlug } from '@/features/untils';


export default async function Page({
	params: { id },
}: {
	params: { id: string; url: string };
}) {
	const posts = await getPosts('am-thuc');
	const post = posts.find((post) => convertToSlug(post.title) === id)
	return (
		<div className="px-3 lg:px-0 w-full md:w-[750px] mx-auto  lg:w-[794px]">
			<div className="flex justify-center items-center flex-col">
				<div className="flex justify-center items-center flex-col gap-4 w-full">
					<div className="text-xl lg:text-4xl font-bold">
						{post?.title}
					</div>
					<div className="text-xl font-bold">
						{post?.description}
					</div>
					<div className="">
						{post?.body && <Markdown
							options={{
								overrides: {
									h1: H1Block,

									p: PBlock,
									image: ImageBlock
								}
							}}
						>
							{post?.body}
						</Markdown>}
					</div>

					<div className="w-full text-end font-bold  lg:text-xl">
						{post?.author}
					</div>
				</div>
			</div>
		</div>
	);
}
