const userArr = []
exports.signup = (req, res) => {
    if (req.body)
        userArr.push(req.body.signup);
    // console.log(JSON.stringify(req.body.signup))
    res.send("User Registered");
}

// let username=
// exports.signin=(req,res)=>{
//     if()
// }