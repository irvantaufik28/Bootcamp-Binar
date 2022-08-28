const restrict = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    return res.restrict({
        messages : "failed"
    })
}
module.exports = restrict