import { Post } from "@/components";
import {   initDataPost } from "@/features/home";
import { BannerLayout } from "@/features/layout";
import Image from 'next/image';

export default function Home() {

	return (
		<div className="">
			<BannerLayout />
			<Post data={initDataPost} />
			
		</div>
	);
}
