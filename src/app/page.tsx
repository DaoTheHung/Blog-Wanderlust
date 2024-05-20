import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';
import { getPosts } from '@/lib/lib';
import Image from 'next/image';
import { newsBlog } from '#side/content';
import { travelBlog } from '#side/content';
import { tipTravelBlog } from '#side/content';
export default function Home() {

	const allPosts = newsBlog.concat(travelBlog).concat(tipTravelBlog)

	return (
		<div className="">
			<BannerLayout />
			<Post data={allPosts} />
		</div>
	);
}
