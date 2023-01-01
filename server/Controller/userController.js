const userArr = []
const loginUserArr = [];

exports.signup = (req, res) => {
    if (req.body)
        userArr.push(req.body);

    res.send({ data: userArr });
}

exports.signin = (req, res) => {
    let isEmail = userArr.find(value => value.email == req.body.email)
    let password = userArr.find(value => value.password == req.body.password)
    let objectForTodo = [{signupData:isEmail}]
    if (isEmail && password) {
        loginUserArr.push(req.body)
        console.log("find", objectForTodo)
    res.send({ data: objectForTodo })
    }
    else {
        console.log("Not login",objectForTodo)
        return res.send({ message: "User Not Found" })
    }

}


exports.todos=(req,res)=>{
    if (req.body){
        let LoginEmail = loginUserArr.find(value=>value.email)
        let chk=LoginEmail[Object.keys(LoginEmail)[0]]
            let loggedInUser = userArr.find(value => value.email == chk)
            if (loggedInUser) {
            for (let i = 0; i < userArr.length; i++ && userArr[i].email === LoginEmail ) {
            // console.log('checkingg todo 2',userArr[i]);
            // if (userArr[i].email === LoginEmail) {
            let example=userArr[i].todo.push(req.body);
            console.log('checkingg todo 2 -- userAdded', userArr[i].todo)
            res.send({data:example})
            // }
        }
        }
        }
}
