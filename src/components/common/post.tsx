'use client';
import React from 'react';
import { initDataPost } from '@/features/home';
import Image from 'next/image';
import { Tpost } from '@/features/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { convertToSlug } from '@/features/untils';
type TData = {
	data: Tpost[];
};

export const Post = ({ data }: TData) => {
	const pathname = usePathname();
	
	return (
		<div className="w-full flex justify-center mx-auto">
			<div className="flex w-[1251px] justify-start px-4 lg:px-auto gap-10  flex-wrap">
				{data.map((item) => (
					<div
						key={item.id}
						className="md:w-[200px] lg:w-[375px]  "
					>
						<div className="flex flex-col gap-7 items-center">
							<div className="cursor-pointer h-[236px]">
								<Image
									width={370}
									height={230}
									alt=""
									className=" !h-full"
									src={item.image}
								/>
							</div>
							<div className="flex  flex-col items-center gap-3">
								<div className="text-[#c39f76] uppercase hover:text-[#444] cursor-pointer ">
									{item.blogId}
								</div>
								<Link
									href={`${pathname}/${convertToSlug(
										item.title
									)}`}
									className="font-bold text-[#444] uppercase cursor-pointer hover:text-[#c39f76]"
								>
									{item.title}
								</Link>

								<div className="text-[#939393] text-sm">
									{item.createAt}
								</div>

								<div className="text-[#444]">
									{item.content}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
