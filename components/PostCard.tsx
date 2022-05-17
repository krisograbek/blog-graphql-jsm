import React from 'react'
import moment from 'moment'
import Link from 'next/link'

type Post = {
  title: string,
  excerpt: string,
  featuredImage: {
    url: string
  }
}
type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => {
  console.log(post);
  if (!post) return;
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      {post.excerpt}
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        {/* <img src={post.featuredImage.url} alt="Image" /> */}
      </div>
    </div>
  )
}

export default PostCard;