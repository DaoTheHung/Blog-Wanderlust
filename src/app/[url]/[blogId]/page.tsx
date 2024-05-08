import { initDataPost } from '@/features/home';
import { convertToSlug } from '@/features/untils';
import Markdown from 'react-markdown';
import Image from 'next/image';
export default function Page({ params }: { params: { blogId: string } }) {
	const filterData = initDataPost.find(
		(item) => convertToSlug(item?.title) === params.blogId
	);

	return (
		<div className="md:w-[750px] mx-auto  lg:w-[707px]">
			<div className="flex justify-center items-center flex-col">
				<div className="flex justify-center items-center flex-col gap-4">
					<Markdown className="uppercase text-[#c39f76]">
						{filterData?.title}
					</Markdown>
					<Markdown className="text-2xl font-bold  text-[#212121]">
						{filterData?.content}
					</Markdown>
					<Markdown className="text-2xl   text-[#212121]">
						{filterData?.content1}
					</Markdown>

					<div className="flex flex-col gap-2 w-full">
						<Image
							className="!w-full !h-full object-cover"
							width={440}
							height={400}
							alt=""
							src={`${filterData?.image}`}
						/>
						<div className="italic">
							{filterData?.desImage}
						</div>
					</div>

					<Markdown className="text-2xl   text-[#212121]">
						{filterData?.content2}
					</Markdown>
					<div className="flex flex-col gap-2 w-full">
						<Image
							className="!w-full !h-full object-cover"
							width={440}
							height={400}
							alt=""
							src={`${filterData?.image1}`}
						/>
						<div className="italic">
							{filterData?.desImage1}
						</div>
					</div>
					<Markdown className="text-2xl   text-[#212121]">
						{filterData?.content3}
					</Markdown>

					<div className="flex flex-col gap-2 w-full">
						<Image
							className="!w-full !h-full object-cover"
							width={440}
							height={400}
							alt=""
							src={`${filterData?.image2}`}
						/>
						<div className="italic">
							{filterData?.desImage2}
						</div>
					</div>

					<Markdown className="text-2xl   text-[#212121]">
						{filterData?.content4}
					</Markdown>

					<div className="text-end text-2xl  w-full">
						{filterData?.author}
					</div>
				</div>
			</div>
		</div>
	);
}
