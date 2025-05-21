import jwt from 'jsonwebtoken';
const isAuth = async (req, res, next) => {
    try {
      console.log("req.cookies:", req.cookies); // 👈 log full cookies object
      const token = req.cookies.token;
  
      if (!token) {
        return res.status(401).json({ message: "Token not exists" });
      }
  
      const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
      req.userId = verifyToken.id;
      next();
  
    } catch (error) {
      console.log("Auth error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

export default isAuth;