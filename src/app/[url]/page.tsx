import { Post } from '@/components';
// import { initDataPost } from '@/features/home';
import { BannerLayout } from '@/features/layout';
import { getPosts } from '@/lib/lib';
import React from 'react';

export default async function Page({ params }: { params: { url: string } }) {
	const posts = await getPosts(params.url);

	return (
		<div>
			<BannerLayout />
			<Post data={posts} />
		</div>
	);
}
