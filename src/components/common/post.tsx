'use client';
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { convertToSlug } from '@/features/untils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components';
import { TinTuc } from '#side/content';
import a from '../../public/images/tin-tuc/10.jpg';
type TData = {
	data: TinTuc[];
};

export const Post = ({ data }: TData) => {
	const [count, setCount] = React.useState(6);

	const handleLoadPost = () => {
		setCount((prev) => prev + 6);
	};
	return (
		<div>
			<div className="w-full flex justify-center mx-auto">
				<div className="flex w-full md:w-[750px] lg:w-[1251px] justify-center gap-10  flex-wrap">
					{data?.slice(0, count).map((item) => (
						<Card
							key={item.id}
							className="md:w-[310px] p-4 lg:w-[375px]  "
						>
							<div className="flex flex-col gap-7 items-center">
								<div
									onClick={() =>
										console.log(item.image)
									}
									className="cursor-pointer md:h-[350px] lg:h-[236px] w-full"
								>
									<Link href={`/${item.slug}`}>
										<Image
											width={370}
											height={230}
											alt=""
											className="!w-full !h-full"
											src={item.image}
										/>
									</Link>
								</div>
								<div className="flex  flex-col items-center gap-3">
									<div className="text-[#c39f76] uppercase hover:text-[#444] cursor-pointer ">
										{item.id}
									</div>
									<Link
										href={`/${item.slug}`}
										className="font-bold text-[#444] uppercase cursor-pointer hover:text-[#c39f76]"
									>
										{item.title}
									</Link>

									<div className="text-[#939393] text-sm">
										{item.date}
									</div>

									<div className="text-[#444] line-clamp-3">
										{item.description}
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
			{count < data?.length && (
				<div className="w-full flex justify-center mt-4">
					<Button onClick={handleLoadPost} variant="outline">
						Xem thêm bài viết
					</Button>
				</div>
			)}
		</div>
	);
};
