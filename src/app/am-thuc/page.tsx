import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';
import { getPosts } from '@/lib/lib';
import React from 'react';

export default async function Food() {
  const posts = await getPosts('am-thuc');

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
