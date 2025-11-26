import  jwt  from "jsonwebtoken"


export const createJWTToken = (id)=>{
    const token = jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
    return token;
}

export const verifyJWTToken = (req,res,next)=>{
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        jwt.verify(token, process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                return res.status(401).json({message:"Unauthorized"})
            };
            req.userId = decoded.id;
            next();
        })
    } catch (error) {

        return res.status(500).json({message:"Server Error",error:error.message})
    }
}

