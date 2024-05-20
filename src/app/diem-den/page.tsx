import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';

import React from 'react';
import { travelBlog } from '#side/content'

export default  function Travel() {
  const posts = travelBlog

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
