import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { IoIosShareAlt } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook2, ImInstagram } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa6';
import { IoLogoTiktok } from 'react-icons/io5';
export const Footer = () => {
	const arr = [
		{
			id: 1,
			title: 'Khám phá vẻ đẹp truyền thống và hiện đại của Hàn Quốc trong hành trình du lịch mùa đông',
			img: 'https://wanderlusttips.asia/wp-content/uploads/2023/12/1-Wanderlust-Tips-Kham-pha-ve-dep-truyen-thong-va-hien-dai-cua-Han-Quoc-trong-hanh-trinh-du-lich-mua-dong-650x433.png',
			date: '25/12/2023'
		},
		{
			id: 1,
			title: 'Khám phá vẻ đẹp truyền thống và hiện đại của Hàn Quốc trong hành trình du lịch mùa đông',
			img: 'https://wanderlusttips.asia/wp-content/uploads/2023/12/1-Wanderlust-Tips-Kham-pha-ve-dep-truyen-thong-va-hien-dai-cua-Han-Quoc-trong-hanh-trinh-du-lich-mua-dong-650x433.png',
			date: '25/12/2023'
		},
		{
			id: 1,
			title: 'Khám phá vẻ đẹp truyền thống và hiện đại của Hàn Quốc trong hành trình du lịch mùa đông',
			img: 'https://wanderlusttips.asia/wp-content/uploads/2023/12/1-Wanderlust-Tips-Kham-pha-ve-dep-truyen-thong-va-hien-dai-cua-Han-Quoc-trong-hanh-trinh-du-lich-mua-dong-650x433.png',
			date: '25/12/2023'
		}
	];
	return (
		<div className="mt-[120px]">
			<div className=" bg-[#eef1f3]">
				<div className="py-[60px] px-4 lg:px-auto lg:w-[70%] xl:w-[1200px] w-full flex justify-center mx-auto ">
					<div className="flex gap-16 flex-wrap lg:flex-nowrap">
						<div className="flex flex-col gap-5">
							<div className="font-bold">
								LIKE US ON FACEBOOK
							</div>
							<Link href="#">
								<div className="bg-footer1 h-[130px] w-[340px]  flex flex-col justify-between">
									<div
										className="flex gap-1
                                 bg-gradient-to-b from-[#000000b3] p-3 via-[#000000b3] to-transparent"
									>
										<div className="w-[55px] h-[55px] bg-white flex justify-center items-center">
											<img
												className="w-[50px] h-[50px]"
												src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/366710283_742879354514639_4424094531317682208_n.jpg?stp=c0.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhAXPg4zuZueq6QAmw_ltxxoU9ylmBjs3GhT3KWYGOzcqYRuw96pl-L07RvmJ4djFdTTR0wCHCEfaRruZyq5VX&_nc_ohc=t5JN1o5o-V0Q7kNvgGIsg7Q&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBD9LOKiCg10MH-V6qiz5LMGKjwZI5KT1ShZ6HtWWpe4g&oe=663B7FE2"
											/>
										</div>
										<div className="flex flex-col">
											<div className="flex items-center gap-2">
												<div className="text-lg text-white">
													Wanderlust Tips
													Magazine
												</div>
												<div className="bg-white rounded-full w-[18px] h-[18px] flex items-center justify-center">
													<div className="text-blue-400 text-sm">
														<FaCheckCircle />
													</div>
												</div>
											</div>
											<div className="text-white text-sm">
												43,673 followers
											</div>
										</div>
									</div>
									<div className="flex justify-between text-xs px-3 py-2">
										<div className="flex gap-1 border border-[#0000001f] h-[22px] items-center rounded-[2px] px-2 text-[#4b4f56] bg-white">
											<div className="text-blue-800 text-base">
												<BiLogoFacebookSquare />
											</div>
											<div className="">
												Follow Page
											</div>
										</div>

										<div className="flex gap-1 border border-[#0000001f] h-[22px] items-center rounded-[2px] px-2 text-[#4b4f56] bg-white">
											<IoIosShareAlt
												color="#4b4f56"
												size={16}
											/>
											<div className="">
												Share
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className=" flex flex-wrap lg:flex-nowrap gap-4">
							<div className="flex flex-col  gap-5 ">
								<div className="font-bold">
									E-MAGAZINE
								</div>
								<div className="flex flex-col gap-1">
									{arr.map((item) => (
										<div
											key={item.id}
											className="flex gap-3"
										>
											<div className="w-[120px] lg:w-[225px] h-[67px]">
												<Image
													className="!w-full !h-full"
													width={100}
													height={67}
													alt=""
													src={item.img}
												/>
											</div>
											<div className="flex flex-col gap-1">
												<div className="font-bold text-[#444]">
													{item.title}
												</div>
												<div className="text-[#939393] italic text-sm">
													{' '}
													{item.date}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="flex flex-col  gap-5 ">
								<div className="font-bold">TIN TỨC</div>
								<div className="flex flex-col gap-1">
									{arr.map((item) => (
										<div
											key={item.id}
											className="flex gap-3"
										>
											<div className="md:w-[120px] lg:w-[225px] h-[67px]">
												<Image
													className="!w-full !h-full"
													width={100}
													height={67}
													alt=""
													src={item.img}
												/>
											</div>
											<div className="flex flex-col gap-1">
												<div className="font-bold text-[#444]">
													{item.title}
												</div>
												<div className="text-[#939393] italic text-sm">
													{' '}
													{item.date}
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
						<div>Ban biên tập Wanderlust Tips </div>
						<div>
							Địa chỉ: Tầng 5, Toà nhà Hàn Việt, 348 Kim
							Ngưu, Quận Hai Bà Trưng, Hà Nội
						</div>
						<div>
							Tầng 6, Toà nhà Home Talk, 236 Đinh Bộ Lĩnh,
							Phường 26, Quận Bình Thạnh, Thành phố Hồ Chí
							Minh
						</div>
						<div>
							Tel: (+84) 911.068.883 | (+84) 917.729.893 |
							Email: contact@wanderlusttips.asia
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
