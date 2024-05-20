import { notFound, redirect } from 'next/navigation';
import { getPost, getPosts } from '@/lib/lib';
import { H1Block, H2Block, ImageBlock, PBlock } from '@/components/post-block';
import Markdown from 'markdown-to-jsx';
import { TPost } from '@/types';

type Tdata = {
	params: {
		id: string
	}
}
export default async function Page({ params }: Tdata) {

	// const post = await getPost(params.id, 'am-thuc')
	// if (!post) return redirect(`/am-thuc`);
	return (
		<div className="px-3 lg:px-0 w-full md:w-[750px] mx-auto  lg:w-[794px]">
			<div className="flex justify-center items-center flex-col">
				{params.id}
				{/* <div className="flex justify-center items-center flex-col gap-4 w-full">
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
				</div> */}
			</div>
		</div>
	);
}



// // or Dynamic metadata
// export async function generateStaticParams() {
// 	const posts = await getPosts('am-thuc');

// 	return posts.map((post) => ({ slug: post.title }))

// }
export async function generateStaticParams() {
	const posts = await getPosts('am-thuc');
	return posts.map((post) => ({
		slug: post.title,
	}))
}
