import mongoose from "mongoose";

const Post = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
})

export default mongoose.model('Posts',Post)