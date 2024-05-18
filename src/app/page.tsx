import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';
import { getPosts } from '@/lib/lib';
import Image from 'next/image';

export default async function Home() {
	const posts = await getPosts('am-thuc');
	const posts1 = await getPosts('diem-den');
	const posts2 = await getPosts('tin-tuc');
	const posts3 = await getPosts('tips-du-lich');
	const allPosts = posts.concat(posts1).concat(posts2).concat(posts3);

	return (
		<div className="">
			<BannerLayout />
			<Post data={allPosts} />
		</div>
	);
}
