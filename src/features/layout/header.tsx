'use client';
import React from 'react';
import { ImFacebook2, ImInstagram } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa6';
import { IoLogoTiktok } from 'react-icons/io5';
import Link from 'next/link';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui';
import { NavbarMobile } from '@/features/layout';
export const Header = () => {
	return (
		<div className="w-full ">
			<div className="w-full border border-b ">
				<div className="flex lg:px-4 px-3 lg:w-[70%] xl:w-[1200px] mx-auto items-center justify-between py-2 ">
					<div className=" lg:flex hidden uppercase text-sm  text-[#818181] gap-8">
						<div className="">LIÊN HỆ</div>
						<div className="">Hello World</div>
						<div className="">Best Hotels Resorts Awards</div>
						<div className="">TRAVEL WITH US</div>
					</div>
					<div className="lg:hidden">
						<Sheet>
							<SheetTrigger>
								<svg
									width="20"
									height="20"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									></path>
								</svg>
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<NavbarMobile />
								</SheetHeader>
							</SheetContent>
						</Sheet>
					</div>
					<div className="flex gap-4">
						<ImFacebook2 color="#818181" />
						<ImInstagram color="#818181" />
						<FaYoutube color="#818181" />
						<IoLogoTiktok color="#818181" />
					</div>
				</div>
			</div>
			<div className="w-full  flex justify-center my-10">
				<div className="flex px-4 lg:px-auto flex-col items-center">
					<Link
						href={'/'}
						className="mb-[10px] font-bold text-4xl lg:text-6xl uppercase"
					>
						{/* <Image
							width={350}
							height={112}
							alt=""
							src="https://wanderlusttips.asia/wp-content/uploads/2020/12/cropped-LOGO-Wanderlust-tips-magazine.png"
						/> */}
						Travel with us
					</Link>
					<div className="uppercase text-center   text-[#818181] tracking-[1px]">
						Tạp chí du lịch được yêu thích nhất Việt Nam
					</div>
				</div>
			</div>
		</div>
	);
};
