'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const BannerLayout = () => {
	const pathname = usePathname();
	const [banner, setBanner] = useState('');

	useEffect(() => {
		if (pathname) {
			if (pathname.split('/')[1] === 'diem-den') {
				setBanner('bg-banner');
			} else if (pathname.split('/')[1] === 'am-thuc') {
				setBanner('bg-banne3');
			} else if (pathname.split('/')[1] === 'tin-tuc') {
				setBanner('bg-banne1');
			} else if (pathname.split('/')[1] === 'tips-du-lich') {
				setBanner('bg-banne2');
			} else {
				setBanner('bg-bannerDefault');
			}
		}
	}, [pathname]);

	return (
		<div>
			<div className="w-full relative mb-10 ">
				<div
					className={cn(banner, ' h-[650px] bg-cover bg-center')}
				></div>
				{pathname === '/' && (
					<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
						<div className="flex flex-col  text-white  text-center">
							<div className="text-xl font-light">
								Travel Blog
							</div>
							<div className="text-[70px] font-semibold">
								Going Places
							</div>
							<div className="text-xl font-light">
								I haven’t been everywhere, but it’s on
								my list
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
