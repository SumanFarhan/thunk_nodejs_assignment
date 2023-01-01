const userArr = []
const Login_UserArr = [];

exports.signup = (req, res) => {
    if (req.body)
        userArr.push(req.body);

    res.send({ data: userArr });
}

// exports.signin = (req, res) => {
//     let isEmail = userArr.find(value => value.email == req.body.email)
//     let password = userArr.find(value => value.password == req.body.password)
//     let objectForTodo = [{signupData:isEmail}]
//     if (isEmail && password) {
//         // Login_UserArr.push(req.body);
//         // console.log("find", objectForTodo)
//     res.send({ data:  })
//     }
//     else {
//         console.log("checdk login",objectForTodo)
//         return res.send({ message: "User Not Found" })
//     }

// }


exports.signin= (req, res) => {
    let Login_username = req.body.email;
    let signupEmail = userArr.find(value => value.email == Login_username)
    let arr = [{ signupData: signupEmail }]
    console.log('found', signupEmail);
    res.send({ data: arr });
    
}

exports.todos=(req,res)=>{
    if (req.body){
        let Login_email = req.body.email;
            let LoggedIn_user = userArr.find(value => value.email == Login_email)
            console.log('checkingg todo 1', JSON.stringify(Login_email));
            if (LoggedIn_user) {
            for (let i = 0; i < userArr.length; i++) {
            console.log('checkingg todo 2');
            if (userArr[i].username === Login_email) {
            userArr[i].todo.push(req.body);
            console.log('checkingg todo 2 -- userAdded', userArr[i])
            res.send({ data: userArr[i] });
            }}
        }
        }
}


// if (req.body) {
//     let Login_email = req.body.username;
//     let LoggedIn_user = userArr.find(value => value.username == Login_email)
    
//     console.log('checkingg todo 1', JSON.stringify(LoggedIn_user));
    
//     if (LoggedIn_user) {
//     for (let i = 0; i < userArr.length; i++) {
//     console.log('checkingg todo 2');
//     if (userArr[i].username === Login_email) {
//     userArr[i].todo.push(req.body.TodoList);
//     console.log('checkingg todo 2 -- userAdded', userArr[i])
//     res.send({ data: userArr[i] });
//     }
//     }
//     }