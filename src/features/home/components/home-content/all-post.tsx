import React from 'react';
import { initDataPost } from '@/features/home';
import Image from 'next/image';

export const AllPost = () => {
	return (
		<div className="w-full flex justify-center mx-auto">
			<div className="flex px-4 lg:px-auto gap-10 justify-center flex-wrap">
				{initDataPost.map((item) => (
					<div key={item.id} className="md:w-[200px] lg:w-[361px]  ">
						<div className="flex flex-col gap-7 items-center">
							<div className="cursor-pointer">
								<Image
									width={370}
									height={230}
									alt=""
									src={item.image}
								/>
							</div>
							<div className="flex  flex-col items-center gap-3">
								<div className="text-[#c39f76] uppercase hover:text-[#444] cursor-pointer ">
									{item.type}
								</div>
								<div className="font-bold text-[#444] uppercase cursor-pointer hover:text-[#c39f76]">
									{item.title}
								</div>

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
