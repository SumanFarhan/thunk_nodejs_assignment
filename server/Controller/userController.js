const userArr = []

exports.signup = (req, res) => {
    if (req.body)
        userArr.push(req.body);

    res.send({data:userArr});
}

exports.signin=(req,res)=>{
    let isEmail = userArr.find(value => value.email== req.body.signin.email)
    let password = userArr.find(value => value.password== req.body.signin.password)
    if(isEmail && password){
        return res.send({message:"Login Successfully"})
    }
    else {
        return res.send({message:"User Not Found"})
    } 
    
 }