const routes=require('express').Router()
const userController=require('../Controller/userController')
 
routes.post('/signup', userController.signup);
routes.post('/signin', userController.signin);
routes.post('/todos', userController.todos);

module.exports=routes;