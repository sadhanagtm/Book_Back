import { FirstOne } from './../entity/firstl';
import {Request,Response,NextFunction,} from 'express'
import AppError from "../Utilities/Apperror"
// import { error } from "console"
import { AppDataSource } from "../data-source"
const firstrepo= AppDataSource.getRepository(FirstOne)

export const getFirstHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await firstrepo.find().then((result:any)=>{
            res.status(200).json({
                message:'First api is a success',data:result
            })
        }).catch(error=>{
                next(new AppError(error.statusCode,error.message))
        })
       
    }catch(error){
        next(new AppError(error.statusCode,error.message))
    }
}
export const postFirstHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        console.log(req.body)
        await firstrepo.save(req.body).then((result:any)=>{
            res.status(200).json({
                message:'First api is a success',data:result
            })
        }).catch(error=>{
                next(new AppError(error.statusCode,error.message))
        })
       
    }catch(error){
        next(new AppError(error.statusCode,error.message))
    }
    
}

