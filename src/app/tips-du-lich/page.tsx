import { Post } from '@/components'
import { initDataPost } from '@/features/home'
import React from 'react'

const Tips = () => {
  return (
    <Post data={initDataPost} />
  )
}

export default Tips