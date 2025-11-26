import bcrypt from 'bcryptjs'
import User from '../models/User.model'
import { createJWTToken } from '../middleware/JWT'

export const Register =async (req,res) =>{
    try {
        const {email, name, password, role } = req.body
        if(!email || !name || !password || !role){
            return res.status(400).json({message:"All fields are required",status: false})
        }

        const checkUser = await User.findOne({email})
        if(checkUser){
            return res.status(401).json({message:"Email already exist",status: false})
        }
        const Salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password,Salt)

        const newUser = await User.create({
            email,
            name,
            password: hashPass,
            role
        })
        if(!newUser){
            return res.status(400).json({message:"Something wrong went Register User",status: false})
        }
        res.status(201).json({message:"Register User Success",data: newUser,status: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error [Register_User]"})
    }
}

export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message:"All fields are required",status: false})
        }

        const checkUser = await User.findOne({email})

        if(!checkUser){
            return res.status(400).json({message:"User not exist",status: false})
        }
        const comparePass = await  bcrypt.compare(password,checkUser.password)
        if(!comparePass){
            return res.status(400).json({message:"Password not correct",status:false})
        }
        
        const GenToken = createJWTToken(checkUser._id)
        res.cookie("accressToken",GenToken,{maxAge: 15 * 60 * 1000 })

        res.status(200).json({message:"Login success",data: {...checkUser,Token :GenToken},status:true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error [Login_User]",status:false})
    }
}

export const getUserById = async (req,res)=>{
    try {
        const {id} = req.body
        const checkUser = await User.findById(id)
        if(!checkUser){
            return res.status(400).json({message:"User not exist",status: false})
        }
        res.status(200).json({message:"GetUser success",data: checkUser,status: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error [GetUserById]",status:false})
    }
}

export const getAllUser = async(req,res)=>{
    try {
        const allUser = await User.find().select('-password')
        res.status(200).json({message:"GetAllUser success",data: allUser,status:true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error [GetAllUser]",status:false})
    }
}

export const updateUserById = async(req,res)=>{
    try {
        const {email, name, password, role} = req.body
        const {id} = req.params
        if(!email || !name || !password || !role){
            return res.status(400).json({message:"All fields are required",status: false})
        }
        const checkUser = await User.findById(id)
        if(!checkUser){
            return res.status(400).json({message:"User not exist",status: false})
        }
        const Salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password,Salt)

        const updateUser = await User.findByIdAndUpdate(id,{
            email,
            name,
            password: hashPass,
            role
        },{new: true}).select('-password')
        if(!updateUser){
            return res.status(400).json({message:'Something wrong went update User',status: false})
        }
        res.status(200).json({message:"Update User by ID success",data: updateUser,status:true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error [UpdateUserByID]",status:false})
    }
}

export const deleteUserById = async(req,res)=>{
    try {
        const {id} =req.params
        await User.findByIdAndDelete(id)
        res.status(200).json({message:"Delete by ID success",status:true})
    } catch (error) {
         console.log(error)
        return res.status(500).json({message:"Server Error [DeleleUserByID]",status:false})
    }
}
