'use client';
import React from 'react';
import { arr } from '@/features/layout';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { checkPathName } from '@/untils';

import Link from 'next/link';

export const NavbarMobile = () => {
	const pathname = usePathname();

	return (
		<div className="flex px-3 uppercase justify-center flex-col mt-4 gap-4">
			{arr.map((item) => (
				<div
					key={item.id}
					className={cn(
						checkPathName(pathname).path === item.url &&
							'!text-[#c39f76]',
						'px-4 text-[#4a4a4a] w-auto font-bold text-sm hover:text-[#c39f76] flex items-center '
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
