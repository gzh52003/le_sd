import React, { Component } from 'react'
import "antd/dist/antd.css";
import './home.css'
import { HashRouter } from 'react-router-dom'
import { Tabs, Input, Drawer, Button, List, Avatar, Carousel, } from 'antd';
import {
    UnorderedListOutlined
} from '@ant-design/icons';


import reqwest from 'reqwest';
const fakeDataUrl = 'http://8.129.28.118:2020/api/applist';



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
                data: res.data,
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

        const data = this.state;
        console.log(this.state);


        // console.log(data.data.data);
        return (
            <HashRouter>
                <Tabs type="card" centered className="nav">
                    <TabPane tab="精选" key="1" >
                        <Carousel autoplay>
                            <div>
                                <img className="lunbo" src="http://img.lenovomm.com//s3/img/app/app-img-lestore/6920-2018-03-13101843-1520907523267.jpg" />
                            </div>
                            <div>
                                <img className="lunbo" src="http://img.lenovomm.com//s3/img/app/app-img-lestore/7869-2018-03-13101934-1520907574920.jpg" />
                            </div>
                        </Carousel>

                        <div className="linknav">
                            <div onClick={this.goto.bind(this)} >
                                <img src="http://img.lenovomm.com//s3/img/app/app-img-lestore/9412-2018-02-22083419-1519302859703.png" />
                                <p style={{ fontSize: '12px', textAlign: 'center', color: "rgba(0, 0, 0, 0.45)" }}>装机必备</p>
                            </div>
                            <div>

                                <img src="http://img.lenovomm.com//s3/img/app/app-img-lestore/2138-2018-02-22083545-1519302945175.png" />
                                <p style={{ fontSize: '12px', textAlign: 'center', color: "rgba(0, 0, 0, 0.45)" }}>游戏论坛</p>

                            </div>
                            <div>

                                <img src="http://img.lenovomm.com//s3/img/app/app-img-lestore/9729-2018-02-26053839-1519637919033.png" />
                                <p style={{ fontSize: '12px', textAlign: 'center', color: "rgba(0, 0, 0, 0.45)" }}>新品上架</p>

                            </div>
                            <div>

                                <img src="http://img.lenovomm.com//s3/img/app/app-img-lestore/8779-2018-02-22083733-1519303053587.png" />
                                <p style={{ fontSize: '12px', textAlign: 'center', color: "rgba(0, 0, 0, 0.45)" }}>小编推荐</p>

                            </div>
                        </div>


                        <div className="demo-infinite-container">

                            <List
                                dataSource={this.state.data.data}
                                renderItem={item => (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src={item.iconAddr} />
                                            }
                                            title={item.name}
                                            description={item.downloadCount}
                                            onClick={this.routerTo.bind(this, item._id)}
                                        />
                                        <div>
                                            <Button type="primary" className="anzhuang" >安装</Button>
                                        </div>
                                    </List.Item>
                                )}
                            >
                            </List>
                        </div>
                    </TabPane>
                    <TabPane tab="游戏" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="软件" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="分类" key="4">

                    </TabPane>
                </Tabs>

                <div className="sou">
                    <Search placeholder="搜索应用" onSearch={value => console.log(value)} enterButton />
                    <div className="site-drawer-render-in-current-wrapper">
                        <Button type="primary" onClick={this.showDrawer}><UnorderedListOutlined /></Button>
                    </div >
                </div >
                <Drawer
                    title="我的"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}>
                    <p>
                        <Button type="link" onClick={this.gotoLogin.bind(this)} block>登录/注册</Button>
                    </p>
                    <p>
                        <Button type="link" block>Link</Button>
                    </p>
                </Drawer>


            </HashRouter >

        )
    }

    // 功能编写
    gotoLogin() {
        this.props.history.push('/login')
    }
    goto() {
        this.props.history.push('/reg')
    }
    routerTo = (v) => {
        this.props.history.push('/Detail/' + v)
        console.log(v);
    }

}

export default Home