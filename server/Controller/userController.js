const userArr=[]

exports.signup = (req, res) => {
let user=req.body.message
        if (check500Error(err,res)) {
            return;
        }else{
            userArr.push(user);
            res.status(200).json({message:'User registered'})
        }
}