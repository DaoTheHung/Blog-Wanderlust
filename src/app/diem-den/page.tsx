import { Post } from '@/components'
import { initDataPost } from '@/features/home'
import React from 'react'

const Travel = () => {
  const filterData = initDataPost?.filter(item => item.blogId.includes('travel'))
  return (
    <Post data={filterData} />
  )
}

export default Travel