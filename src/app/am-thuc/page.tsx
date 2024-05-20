import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';

import React from 'react';
import { eatBlog } from '#side/content'

export default  function Food() {
  const posts = eatBlog

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
