import { Post } from '@/components';
import { BannerLayout } from '@/features/layout';

import React from 'react';
import { tipTravelBlog } from '#side/content'

export default  function Tips() {
  const posts = tipTravelBlog

  return (
    <div>
      <BannerLayout />
      <Post data={posts} />
    </div>
  );
}
