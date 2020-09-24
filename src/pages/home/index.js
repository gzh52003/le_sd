import React, { Component } from 'react'
import "antd/dist/antd.css";
import './home.css'
import { HashRouter } from 'react-router-dom'
import { Tabs, Input, Drawer, Button, List, Avatar, Spin } from 'antd';
import {
    UnorderedListOutlined
} from '@ant-design/icons';

import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


const { TabPane } = Tabs;
const { Search } = Input;

class Home extends Component {

    state = {
        data: [],
        loading: false,
        hasMore: true,

        visible: false
    };

    componentDidMount() {
        this.fetchData(res => {
            this.setState({
                data: res.results,
            });
        });
    }
    fetchData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {

        const { data } = this.state;
        console.log({ data });
        console.log(this.state);
        return (
            <HashRouter>
                <Tabs type="card" centered className="nav">
                    <TabPane tab="Tab 1" key="1" >
                        <div className="demo-infinite-container">

                            <List
                                dataSource={this.state.data}
                                renderItem={item => (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            }
                                            title={<a href="https://ant.design">{item.name.last}</a>}
                                            description={item.email}
                                        />
                                        <div>Content</div>
                                    </List.Item>
                                )}
                            >
                            </List>

                        </div>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Tab 4" key="4">
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                        <img src="https://img.zcool.cn/community/0146495f69c5d311013f31104aff2b.jpg@260w_195h_1c_1e_1o_100sh.jpg" />
                    </TabPane>
                </Tabs>

                <div className="sou">
                    <Search placeholder="搜索应用" onSearch={value => console.log(value)} enterButton />
                    <div className="site-drawer-render-in-current-wrapper">

                        <Button type="primary" onClick={this.showDrawer}><UnorderedListOutlined /></Button>

                        <Drawer
                            title="我的"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            getContainer={false}

                        >
                            <p>
                                <Button type="link" onClick={this.gotoLogin.bind(this)} block>登录/注册</Button>
                            </p>
                            <p>
                                <Button type="link" block>Link</Button>
                            </p>
                        </Drawer>
                    </div >
                </div >




            </HashRouter >

        )
    }

    // 功能编写
    gotoLogin() {
        this.props.history.push('/login')
    }

}

export default Home