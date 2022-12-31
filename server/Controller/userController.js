const userArr = []
exports.signup = (req, res) => {
    if (req.body)
        userArr.push(req.body.signup);


    res.send("User Registered Successfully");
}

exports.signin=(req,res)=>{
    let isEmail = userArr.find(value => value.email== req.body.signin.email)
    let password = userArr.find(value => value.password== req.body.signin.password)
    console.log("email here ",JSON.stringify(req.body.signin.email))
    // console.log(password)

 }