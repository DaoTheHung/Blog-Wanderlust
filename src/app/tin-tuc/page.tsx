import { Post } from '@/components'
import { initDataPost } from '@/features/home'
import React from 'react'

const New = () => {
  return (
    <Post data={initDataPost} />
  )
}

export default New