import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './reg.css'
import CryptoJS from 'crypto-js'
import request from '../../utils/request'


const onFinish = async ({username,password})=>{
    password= CryptoJS.SHA256(password)
    password = CryptoJS.enc.Hex.stringify(password)
    console.log(password);
    const data = await request.post('/user',{
        username,password
    })
    if(data.status === 200){
        props.login(data.data)
        props.history.push('/login')
    }
}
function Reg(){
  return (
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{ remember: true }}
    onFinish={onFinish}
  >
      <h1 className="title">注 册</h1>
    <Form.Item
      name="username"
      rules={[{ required: true, message: '请输入用户名!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: '请输入密码!' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="密码"
      />
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>同意该
            <a>协 议</a></Checkbox>
      </Form.Item>
      <span>
      <a className="login-to" href="#/login">
        登 录
      </a>
      <span className="login-to">已有账号,立即 </span>
      </span>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        注 册
      </Button>
    </Form.Item>
  </Form>
  )
} 

export default Reg