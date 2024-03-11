import React, { useEffect, useState } from 'react';
import Card from '../component/Card';
import SinglePage from './SinglePage';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [pageClicked, setPageClicked] = useState(null);
  const [page, setPage] = useState(0);
  
  async function getData() {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
      const resData = await response.json();
      setPosts(resData.data.posts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <>
    <div className='grid gap-4 grid-cols-1 grid-rows-10 mt-5 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-4 lg:grid-rows-3'>
      {posts.map(post => (
        <Card key={post.postId} post = {post} page={page} className='m-5'/>
      ))}
    </div>
    <div className='flex items-center justify-center font-bold text-2xl my-10'>
      <button onClick={()=>setPage(page === 0 ? 9 : page-1)} className='mx-5 bg-teal-500 p-3 text-white rounded-lg'>Prev</button>
      <p>{page}</p>
      <button onClick={()=>setPage(page === 9 ? 0 : page+1)}className='mx-5  bg-teal-500 p-3 text-white rounded-lg'>Next</button>
    </div>
    </>
  );
};

export default Home;
