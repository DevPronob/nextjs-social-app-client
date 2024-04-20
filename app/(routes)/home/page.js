"use client"
import React, { useEffect, useState } from 'react'
import Banner from './_components/Banner'
import { useUser } from '@clerk/nextjs'
import WritePost from './_components/WritePost'
import PostList from './_components/PostList'
import GlobalApi from '../../_utils/GlobalApi'
function Home() {
  const {user} =useUser()

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    GlobalApi.getPosts().then(
      (resp) => {
        if (resp) {
          setPosts(resp.data);
        }
      },
      (error) => {
        console.log(error, "postData");
        toast.error("Some Server Side Error");
        // toast({
        //     title: "Opps!!!",
        //     description: "Some Server Side Error!",
        //     variant: "destructive"
        //   })
      }
    );
  };

  console.log(posts, "postssss");
  
  return (
    <div className='p-5'>
      {
        !user ? <Banner/>:<WritePost getAllPost={() =>getAllPosts()}/>
      }
      {user && <PostList  posts ={posts.data} updatedPostList ={() =>getAllPosts()} />}
    </div>
  )
}

export default Home