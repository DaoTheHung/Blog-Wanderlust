import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';
import React from 'react';

export default async function Food() {
  const posts = [] as any[]

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
