'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const BannerLayout = () => {
	const pathname = usePathname().split('/')[1];

	const checkBanner = () => {
		if (pathname) {
			if (pathname === 'diem-den') {
				return 'bg-banner';
			}
			if (pathname === 'am-thuc') {
				return 'bg-banne3';
			}
			if (pathname === 'tin-tuc') {
				return 'bg-banne1';
			}
			if (pathname === 'tips-du-lich') {
				return 'bg-banne2';
			}
		}
	};

	return (
		<div>
			<div className="w-full relative mb-10 ">
				<div
					className={cn(
						checkBanner(),
						' h-[600px] bg-cover bg-center'
					)}
				></div>
			</div>
		</div>
	);
};
