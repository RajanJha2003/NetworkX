import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRouter from './routes/user.route.js';
dotenv.config()


const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

const PORT=process.env.PORT ;
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json());
connectDB();

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})