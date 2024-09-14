import { error } from 'console';
import { Response, NextFunction, Request } from 'express';
import { SecondOne } from "../entity/second";
import { AppDataSource } from '../data-source';
import AppError from '../Utilities/Apperror';
const secondrepo= AppDataSource.getRepository(SecondOne)

export const getSecondHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        console.log(req.body)
        await secondrepo.save(req.body).then((result:any)=>{
            res.status(200).json({
                message:'Second api is a success',data:result
            })
        }).catch(error=>{
            next(new AppError(error.statusCode,error.message))
        })
    }
    catch(error){
        next(new AppError(error.statusCode,error.message))
    }
}
export const postSecondHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        console.log(req.body)
        await secondrepo.save(req.body).then((result:any)=>{
            res.status(200).json({
                message:'Second api is a success',data:result
            })
        }).catch(error=>{
            next(new AppError(error.statusCode,error.message))
        })
    }catch(error){
        next(new AppError(error.statusCode,error.message))
    }
}