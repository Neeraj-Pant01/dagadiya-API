const CreateError = require("../error")
const jwt = require("jsonwebtoken")

const verify = async (req,res,next)=>{
    const token = req.cookies.accessToken
    if(!token) return next(CreateError(400,"unauthorized user !"))

    jwt.verify(token,process.env.SECRETKEY,async(error,payload)=>{
        if(error) return next(CreateError(404,"token is not valid"))
        req.userId = payload.id;
        next()
    })
}
module.exports = verify