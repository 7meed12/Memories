import PostMessage from '../models/postMessage.js';



export const getPosts = async (req,res) => {
   try{
       const postMessages = await PostMessage.find();
       res.status(200).json(postMessages);

   }catch(err){
         res.status(404).json({message:err.message});
   }
    }

export const createPost = async (req,res) => {
   const post = req.body;
   const newpPost = new PostMessage(post);
    try{
         await newpPost.save();
         res.status(201).json(newpPost);
    }catch(error){
        res.status(400).json({message:error.message});
    }
   }
