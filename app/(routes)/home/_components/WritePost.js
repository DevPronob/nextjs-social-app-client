"use client"
import React, { useContext, useRef, useState } from 'react'
import { Button } from '../../../../components/ui/button'
import { useUser } from '@clerk/nextjs'
import { Image, Video } from 'lucide-react'
import toast from 'react-hot-toast';
import { UserDetailContext } from '../../../_context/UserDetailContext'
import GlobalApi from '../../../_utils/GlobalApi'


const WritePost = ({getAllPost}) => {
  const {user} =useUser()
  const {userDetail,setUserDetail}=useContext(UserDetailContext);

  const [postData, setPostData] = useState('');
  const textareaRef = useRef(null);
  const handlePublish = () => {
    const postData = textareaRef.current.value;

    const data ={
      postText:postData,
      createdAt:Date.now().toString(),
      createdBy:userDetail._id,
    }
    GlobalApi.createPost(data).then(resp=>{
      console.log(resp);
      setPostData('');
      if(resp)
      {
          getAllPost()
          toast.success("Your Post Publish succesasfully")
          console.log(resp,"postData")
      }
  },(error)=>{
    console.log(error,"postData")
    toast.error("Some Server Side Error")
      // toast({
      //     title: "Opps!!!",
      //     description: "Some Server Side Error!",
      //     variant: "destructive"
      //   })
  })
    // You can now use `postData` to send the data to your backend or perform any other action
    console.log('Post Data:', postData);
    // Clear the textarea after publishing
    setPostData('');
  };
  return (
    <div>
      <h2 className='text-[30px] font-medium'>Hello,{user.fullName}</h2>
      <p className='text-gray-400'>Whats new with You,Would you like to share something with community</p>
      <div className='p-2 border rounded-lg mt-2 bg-slate-100 '>
        <h2 className=''>Create Post</h2>
        <div className='p-4 border rounded-lg mt-2 bg-white'>
          <textarea  ref={textareaRef} // Attach ref to textarea
            value={postData}
            onChange={(e) => setPostData(e.target.value)} className='outline-none w-full' placeholder='Whats new'></textarea>
        </div>
       <div className='flex justify-between mt-3'>
       <div className='flex items-center mt-2'>
          <h2 className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg'><Image className='h-5 w-5'/> Image</h2>
          <h2 className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg'><Video className='h-5 w-5'/> Vedio</h2>
        </div>
        <Button onClick={handlePublish}  className='bg-blue-500 rounded-xl'>Publish</Button>
       </div>
      </div>
    </div>
  )
}

export default WritePost