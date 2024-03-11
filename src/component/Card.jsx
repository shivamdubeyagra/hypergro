import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post, page}) => {
  return (
    <div>
      <Link to={`/video/${post.postId}?page=${page}`}>
        <div className='relative' >
          <img src={post.submission.thumbnail} width={"100%"} alt="" className='rounded-2xl'/>
          <div className='absolute bottom-0 left-0 right-0 bg-slate-800/30 text-white font-semibold text-xl py-3 rounded-b-2xl'>
            <div className='flex items-center'>
              <img src={post.creator.pic} alt="" className='w-10 rounded-3xl bg-cover mx-1'/>
              <p className='mx-3'>{post.creator.name}</p>
            </div>
            <p className='mx-3'>{post.submission.title}</p>
            <p className='mx-3'>{post.creator.handle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
