const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode;
    switch(statusCode){
        case 400:
            res.json({Title:"validation failed",Message:err.message,StackTrace:err.stackTrace});
            break;
        case 404:
            res.json({Title:"Not found",Message:err.message,StackTrace:err.stackTrace});
            break;
        default:
            res.json({Title:"No idea",Message:err.message,StackTrace:err.stackTrace});
            break;
    }
}

module.exports=errorHandler;