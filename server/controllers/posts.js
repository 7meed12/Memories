import mongoose from 'mongoose';
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
export const updatePost = async (req,res) => {
    const {id : _id} = req.params; 
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){ return res.status(404).send('No Post Found')};
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    res.json(updatedPost);

}