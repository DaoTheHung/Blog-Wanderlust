import { AllPost, HomeList } from '@/features/home';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<HomeList />
			<div className="w-full relative mb-10">
				<Image
					className="!w-full"
					width={1469}
					height={475}
					alt=""
					src="https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_1469,h_475,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg"
				/>
				<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
					<div className="flex flex-col  text-white  text-center">
						<div className="text-xl font-light">
							Travel Blog
						</div>
						<div className="text-[70px] font-semibold">
							Going Places
						</div>
						<div className="text-xl font-light">
							I haven’t been everywhere, but it’s on my
							list
						</div>
					</div>
				</div>
			</div>
			<AllPost />
		</div>
	);
}
