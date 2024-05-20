import { notFound } from 'next/navigation';
import { getPost } from '@/lib/lib';
import { H1Block, H2Block, ImageBlock, PBlock } from '@/components/post-block';
import Markdown from 'markdown-to-jsx';

export default async function Page({
	params
}: {
	params: { id: string; url: string };
}) {
	const post = await getPost(params.id, 'tips-du-lich');
	if (!post) return notFound();
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
						<Markdown
							options={{
								overrides: {
									h1: H1Block,

									p: PBlock,
									image: ImageBlock
								}
							}}
						>
							{post.body}
						</Markdown>
					</div>

					<div className="w-full text-end font-bold  lg:text-xl">
						{post.author}
					</div>
				</div>
			</div>
		</div>
	);
}
