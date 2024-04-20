const { default: axios } = require("axios");

//created axio client to create endpoint
const axioClient=axios.create({
    baseURL:'http://localhost:8000'
});

const createUser =(data) =>axioClient.post('/api/user',data)
const getUser =(email)=>axioClient.get('/api/user/'+email)

const createPost =(data) =>axioClient.post('/api/post',data)
const getPosts =() =>axioClient.get('/api/post/')
const onPostLike=(postId,data)=>axioClient.put("/api/post/like/"+postId,data)
const createComment=(data)=>axioClient.post("/api/comment",data)
// const getUserByEmail=(email)=>axiosClient.get('/api/user/'+email)


export default{
    createUser,
    getUser,
    createPost,
    getPosts,
    onPostLike,
    createComment

}