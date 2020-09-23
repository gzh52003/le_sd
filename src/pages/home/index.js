import React, { Component } from 'react'
import "antd/dist/antd.css";
import './home.css'
import { HashRouter } from 'react-router-dom'
import { Tabs } from 'antd';

const { TabPane } = Tabs;


class Home extends Component {

    render() {

        return (
            <HashRouter>
                {/* <div className="P-home">
                    <h1>Home page</h1>
                    <button onClick={this.gotoLogin.bind(this)}>跳到login</button>

                </div> */}
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </HashRouter>

        )
    }

    // 功能编写
    // gotoLogin() {
    //     this.props.history.push('/login')
    // }
}

export default Home