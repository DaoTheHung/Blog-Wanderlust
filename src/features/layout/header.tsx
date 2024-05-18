import React from 'react';
import { ImFacebook2, ImInstagram } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa6';
import { IoLogoTiktok } from 'react-icons/io5';
import Link from 'next/link';
export const Header = () => {
	return (
		<div className="w-full ">
			<div className="w-full border border-b ">
				<div className="flex px-4 lg:px-auto lg:w-[70%] xl:w-[1200px] mx-auto items-center justify-between py-2 ">
					<div className=" lg:flex hidden uppercase text-sm  text-[#818181] gap-8">
						<div className="">LIÊN HỆ</div>
						<div className="">Hello World</div>
						<div className="">Best Hotels Resorts Awards</div>
						<div className="">TRAVEL WITH US</div>
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
