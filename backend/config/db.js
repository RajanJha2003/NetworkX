import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error);
        
    }
}


export default connectDB;;