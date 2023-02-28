import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/PostRoute.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=>console.log(`Server running...`));