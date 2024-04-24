import Link from 'next/link';
import React from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
export const Navbar = () => {
	const arr = [
		{
			id: 1,
			name: 'video'
		},
		{
			id: 2,
			name: 'Tin tức'
		},
		{
			id: 3,
			name: 'Điểm đến'
		},
		{
			id: 4,
			name: 'TRAVEL TIPS'
		},
		{
			id: 5,
			name: 'ẩm thực'
		},
		{
			id: 6,
			name: 'Ở ĐÂU – KHI NÀO'
		},
		{
			id: 7,
			name: 'đối thoại'
		},
		{
			id: 8,
			name: 'E.Magazine'
		}
	];
	return (
		<div className="flex uppercase justify-center flex-wrap gap-4">
			{arr.map((item) => (
				<div className="px-4 text-[#4a4a4a] w-auto font-bold hover:text-[#c39f76] flex items-center ">
					<Link href={''}>{item.name}</Link>
					{item.id !== 7 && item.id !== 8 && (
						<RiArrowDropDownFill className="text-xl" />
					)}
				</div>
			))}
		</div>
	);
};
