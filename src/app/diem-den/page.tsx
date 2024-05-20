import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';
import { getPosts } from '@/lib/lib';
import React from 'react';

export default async function Travel() {
  const posts = await getPosts('diem-den');

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
