import React, { Component } from 'react'
import "antd/dist/antd.css";
import './home.css'
import { HashRouter } from 'react-router-dom'
import { Tabs, Input, Drawer, Button, List, Avatar, Skeleton } from 'antd';
import {
    AudioOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import reqwest from 'reqwest';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

const { TabPane } = Tabs;
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

class Home extends Component {

    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
        visible: false
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
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

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
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

        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>加载更多</Button>
                </div>
            ) : null;

        return (
            <HashRouter>
                <Tabs defaultActiveKey="1" centered className="nav">
                    <TabPane tab="Tab 1" key="1" >
                        <List
                            className="demo-loadmore-list"
                            loading={initLoading}
                            itemLayout="horizontal"
                            loadMore={loadMore}
                            dataSource={list}
                            renderItem={item => (
                                <List.Item
                                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                                >
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            }
                                            title={<a href="https://ant.design">{item.name.last}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                        <div>content</div>
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
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