import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRouter from './routes/auth.route.js';
dotenv.config()

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

const PORT=process.env.PORT ;

app.use(express.json());
connectDB();

app.use("/api/auth",authRouter);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})