import { Post } from '@/components'
import { initDataPost } from '@/features/home'
import React from 'react'

const Food = () => {
  return (
    <Post data={initDataPost} />
  )
}

export default Food