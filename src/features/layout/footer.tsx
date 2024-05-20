import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { IoIosShareAlt } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook2, ImInstagram } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa6';
import { IoLogoTiktok } from 'react-icons/io5';
import { newsBlog, travelBlog } from '#side/content';
export const Footer = () => {
	return (
		<div className="mt-[120px]">
			<div className=" bg-[#eef1f3]">
				<div className="py-[60px] px-4 lg:px-auto lg:w-[70%] xl:w-[1200px] w-full flex justify-center mx-auto ">
					<div className="flex gap-16 flex-wrap lg:flex-nowrap">
						<div className="flex flex-col gap-5 justify-center h-full">
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
						</div>
						<div className=" flex flex-wrap lg:flex-nowrap gap-4">
							<div className="flex flex-col  gap-5 ">
								<div className="font-bold uppercase">
									Điểm đến
								</div>
								<div className="flex flex-col gap-1">
									{travelBlog
										.slice(3, 6)
										.map((item) => (
											<div
												key={item.id}
												className="flex gap-3"
											>
												<div className="w-[129px] h-[45px]">
													<Image
														className="!w-full !h-full"
														width={
															100
														}
														height={
															67
														}
														alt=""
														src={
															item.image
														}
													/>
												</div>
												<div className="flex flex-col gap-1 w-[100px]">
													<div className="font-bold text-[#444] line-clamp-2">
														{
															item.title
														}
													</div>
													<div className="text-[#939393] italic text-sm">
														{' '}
														{
															item.date
														}
													</div>
												</div>
											</div>
										))}
								</div>
							</div>

							<div className="flex flex-col  gap-5 ">
								<div className="font-bold">TIN TỨC</div>
								<div className="flex flex-col gap-1">
									{newsBlog
										.slice(0, 3)
										.map((item) => (
											<div
												key={item.id}
												className="flex gap-3"
											>
												<div className="w-[129px] h-[45px]">
													<Image
														className="!w-full !h-full"
														width={
															100
														}
														height={
															67
														}
														alt=""
														src={
															item.image
														}
													/>
												</div>
												<div className="flex flex-col gap-1 w-[100px]">
													<div className="font-bold text-[#444] line-clamp-2">
														{
															item.title
														}
													</div>
													<div className="text-[#939393] italic text-sm">
														{' '}
														{
															item.date
														}
													</div>
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" bg-white ">
				<div className="py-[30px] px-4 lg:px-auto lg:w-[70%] xl:w-[1200px] w-full flex justify-between mx-auto items-center flex-wrap gap-4">
					<div className="text-lg text-[#444444d6] ">
						<div>Ban biên tập Travel with us </div>
						<div>
							Địa chỉ: Tầng 5, Toà nhà Hàn Việt, 348 Kim
							Ngưu, Quận Hai Bà Trưng, Hà Nội
						</div>
						<div>
							Tầng 5 tòa b fafilm 19 nguyễn trãi thanh xuân
							hà nội
						</div>
						<div>
							Tel: (+84) 911.068.883 | (+84) 917.729.893 |
							Email: contact@travelwithus.asia
						</div>
					</div>
					<div className="flex gap-1.5">
						<div className="w-9 h-9 cursor-pointer rounded-full bg-[#ddd] hover:bg-[#212121] transition-colors duration-300 text-white flex items-center justify-center">
							<ImFacebook2 />
						</div>
						<div className="w-9 h-9 cursor-pointer rounded-full bg-[#ddd] hover:bg-[#212121] transition-colors duration-300 text-white flex items-center justify-center">
							<ImInstagram />
						</div>
						<div className="w-9 h-9 cursor-pointer rounded-full bg-[#ddd] hover:bg-[#212121] transition-colors duration-300 text-white flex items-center justify-center">
							<FaYoutube />
						</div>
						<div className="w-9 h-9 cursor-pointer rounded-full bg-[#ddd] hover:bg-[#212121] transition-colors duration-300 text-white flex items-center justify-center">
							<IoLogoTiktok />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
