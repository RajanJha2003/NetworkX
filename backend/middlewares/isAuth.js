import jwt from 'jsonwebtoken';

const isAuth = async(req, res, next) => {
  try {
    let {token}=req.cookies;
    if(!token){
      return res.status(401).json({message:"Token not exists"})
    }

   let verifyToken= await jwt.verify(token,process.env.JWT_SECRET);
   if(!verifyToken){
    return res.status(401).json({message:"User does not have valid token"})
   }
   req.userId=verifyToken.id;
   next(); //next is used to move to the next middleware if any


  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"})
    
  }
}

export default isAuth;