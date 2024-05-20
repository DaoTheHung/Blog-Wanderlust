import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';

import React from 'react';
import { newsBlog } from '#side/content'

export default async function News() {
  const posts = newsBlog

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
