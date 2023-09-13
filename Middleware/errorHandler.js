//not found
const notFound=(req,res,nexth)=>{
    const err=new Error(`Not Found':${req.originalUrl}`);
    res.status(404);
    next(err);
};

//err handler



module.exports={errorHandler,notFound}