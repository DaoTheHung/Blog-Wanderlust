import React from 'react';
import Image from 'next/image';

export const BannerLayout = () => {
	return (
		<div>
			<div className="w-full relative mb-10">
				<div className="bg-banner h-[500px] bg-cover bg-center"></div>
				<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
					<div className="flex flex-col  text-white  text-center">
						<div className="text-xl font-light">
							Travel Blog
						</div>
						<div className="text-[70px] font-semibold">
							Going Places
						</div>
						<div className="text-xl font-light">
							I haven’t been everywhere, but it’s on my
							list
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
