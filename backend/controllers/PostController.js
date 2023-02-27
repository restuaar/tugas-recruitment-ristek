import Post from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const savePost = async (req, res) => {
    const post = new Post(req.body);
    try {
        const insertedpost = await post.save();
        res.status(201).json(insertedpost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatedpost = await Post.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedpost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePost = async (req, res) => {
    try {
        const deletedpost = await Post.deleteOne({_id:req.params.id});
        res.status(200).json(deletedpost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}