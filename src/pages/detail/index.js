import React, { Component } from 'react'
import "antd/dist/antd.css";
import { List, Avatar, Button, PageHeader } from 'antd';
import request from '../../utils/request';
import './detail.css'



class Detail extends Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        console.log(this.props);
        const { id } = this.props.match.params;
        console.log({ id });
        console.log(this.props.match.params);

        const data = await request.get('/applist/' + id)
        this.setState({
            data: data.data
        });

    }

    render() {

        const num = this.state.data
        console.log(num);
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="SSS"
                />
                <List>
                    <List.Item.Meta
                        avatar={<Avatar src={num.iconAddr} />}
                        title={num.name}
                        description={num.downloadCount}
                    />
                    <Button type="primary" className="anzhuang" >普通安装</Button>
                </List>
            </div >

        )
    }
}

export default Detail