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
				setBanner('lg:bg-banner banner_m');
			} else if (pathname.split('/')[1] === 'am-thuc') {
				setBanner('lg:bg-banne3 bg-banne3_m');
			} else if (pathname.split('/')[1] === 'tin-tuc') {
				setBanner('lg:bg-banne1 bg-banne1_m');
			} else if (pathname.split('/')[1] === 'tips-du-lich') {
				setBanner('lg:bg-banne2 bg-banne2_m');
			} else {
				setBanner('lg:bg-bannerDefault bg-bannerDefault_m');
			}
		}
	}, [pathname]);

	return (
		<div>
			<div className="w-full relative mb-10 ">
				<div
					className={cn(banner, ' h-[650px] bg-cover bg-center')}
				></div>
			</div>
		</div>
	);
};
