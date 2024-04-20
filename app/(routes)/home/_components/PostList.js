"use client"
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import GlobalApi from "../../../_utils/GlobalApi";
import Postitem from "./Postitem";

function PostList({posts,updatedPostList}) {
  
  return (
    <div>
  {posts ? (
    <div>
      {posts?.map((item, index) => (
        <Postitem updatedPostList ={updatedPostList} key={index} post={item} /> // Assuming Postitem is a component that renders each post item
      ))}
    </div>
  ) : (
    <h3 className="text-center py-7">No Post Available</h3>
  )}
</div>
   
  );
}

export default PostList;
