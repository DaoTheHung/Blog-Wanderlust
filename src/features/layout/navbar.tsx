'use client';
import { cn } from '@/lib/utils';
import { checkPathName } from '@/untils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
export const Navbar = () => {
	const pathname = usePathname();
	const arr = [
		{
			id: 2,
			name: 'Tin tức',
			url: 'tin-tuc'
		},
		{
			id: 3,
			name: 'Điểm đến',
			url: 'diem-den'
		},
		{
			id: 4,
			name: 'TIPS du lịch',
			url: 'tips-du-lich'
		},
		{
			id: 5,
			name: 'ẩm thực',
			url: 'am-thuc'
		}
	];

	return (
		<div className="flex uppercase justify-center flex-wrap gap-4">
			{arr.map((item) => (
				<div
					key={item.id}
					className={cn(
						checkPathName(pathname).path === item.url &&
							'!text-[#c39f76]',
						'px-4 text-[#4a4a4a] w-auto font-bold hover:text-[#c39f76] flex items-center '
					)}
				>
					<Link href={`/${item.url}`}>{item.name}</Link>
					{/* {item.id !== 7 && item.id !== 8 && (
						<div className="text-xl">
							<RiArrowDropDownFill />
						</div>
					)} */}
				</div>
			))}
		</div>
	);
};
