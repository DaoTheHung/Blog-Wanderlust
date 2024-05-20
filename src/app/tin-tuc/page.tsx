import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';
import { getPosts } from '@/lib/lib';
import React from 'react';

export default async function News() {
  const posts = await getPosts('tin-tuc');

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
