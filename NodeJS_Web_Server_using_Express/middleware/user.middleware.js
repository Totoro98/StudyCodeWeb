module.exports.postCreate = (req, res, next) =>{
    if(!req.body.name){
        var error =1
        res.render('./users/createUser',{
            error : error
        })
        return;
    }
    next()
}