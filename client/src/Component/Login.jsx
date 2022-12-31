import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { loginUser } from '../Redux/Reducer'
import { useDispatch } from 'react-redux';




const Login = () => {
    const [logIn, setLogIn] = useState({
        email: "",
        password: ""
    })
    const Setting = (event) => {
        const { name, value } = event.target
        setLogIn((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    const dispatch = useDispatch()

    return (
        <>
            <h1 className='heading'>LOGIN</h1>
            <div className="login">

                <Form
                    name="basic"
                    action='/dashboard'
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off">
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input name="email" onChange={Setting} value={logIn.email} />
                    </Form.Item>

                    <Form.Item
                        label="Password" name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password name="password" onChange={Setting} value={logIn.password} />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" onClick={() => dispatch(loginUser(logIn))}>
                            Login
                        </Button>
                        <br />
                        <br />
                        <Link to="/">Signup</Link>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default Login