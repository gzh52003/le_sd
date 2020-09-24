import React from 'react'
import CryptoJS from 'crypto-js'
import request from '../../utils/request'

import {Tabs,Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.css'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import userAction from '../../store/actions/user'

function Login(props){
    const onFinish = async ({username,password,mdl})=>{
        password= CryptoJS.SHA256(password)
        password = CryptoJS.enc.Hex.stringify(password)
        console.log(password);
        const data = await request.get('/user',{
            username,password,mdl
        })
        if(data.status === 200){
            props.login(data.data)
            props.history.push('/home')
        }
    }
    return(
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
                <h1 className='title'>请 登 录</h1>
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入正确的用户名!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入正确的密码!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
                </Form.Item>
                <span>
                    <a className="login-form-forgot" href="">
                    | 忘记密码 
                    </a>
                    <a className="login-form-forgot" href="#/reg">
                    立即注册  
                    </a>
                </span>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                登 录
                </Button>
            </Form.Item>
            </Form>
    );
}

const mapStateToProps = ({currentUser})=>({currentUser})
const mapDispatchToProps = function(dispatch){
    return bindActionCreators(userAction,dispatch)
}
Login = connect(mapStateToProps,mapDispatchToProps)(Login)

export default Login