export default class Apperror extends Error{
    status:string;
    isOperational:boolean;

    constructor(public StatusCode:number=500,public message:string){
        super(message)
        this.status=`${StatusCode}`.startsWith('4')?'fail':'error';
        this.isOperational=true;
        Error.captureStackTrace(this,this.constructor)
    }
}