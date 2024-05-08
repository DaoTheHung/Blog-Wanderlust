import { Post } from '@/components';
import { initDataPost } from '@/features/home';
import { BannerLayout } from '@/features/layout';
import React from 'react';

export default function Page({ params }: { params: { url: string } }) {
	const filterData = initDataPost.filter(
		(item) => item.blogId === params.url
	);
	return (
		<div>
			<BannerLayout />
			<Post data={filterData} />
		</div>
	);
}
