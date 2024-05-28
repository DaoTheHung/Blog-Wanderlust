import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';
import { getPosts } from '@/lib/lib';
import Image from 'next/image';
import { newsBlog } from '#side/content';
import { travelBlog } from '#side/content';
import { tipTravelBlog } from '#side/content';
export default function Home() {
	const filtetNewBlog = newsBlog?.filter(
		(item) => item.slugAsParams === 'post8'
	);
	const filtetTravelBlog = travelBlog?.filter(
		(item) => item.slugAsParams === 'travel11'
	);
	const filtetTravelBlog1 = travelBlog?.filter(
		(item) => item.slugAsParams === 'travel10'
	);
	const filtetTravelBlog2 = travelBlog?.filter(
		(item) => item.slugAsParams === 'travel4'
	);

	const filtetTipsBlog = tipTravelBlog.filter(
		(item) => item.slugAsParams === 'tips2'
	);
	const filtetTipsBlog1 = tipTravelBlog.filter(
		(item) => item.slugAsParams === 'tips5'
	);
	const allPosts = filtetNewBlog
		.concat(filtetTravelBlog)
		.concat(filtetTravelBlog1)
		.concat(filtetTipsBlog)
		.concat(filtetTipsBlog1)
		.concat(filtetTravelBlog2);
	return (
		<div className="">
			<BannerLayout />
			<Post data={allPosts} />
		</div>
	);
}
