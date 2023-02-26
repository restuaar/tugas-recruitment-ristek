import mongoose from "mongoose";

const User = mongoose.Schema({
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

export default mongoose.model('Users',User)