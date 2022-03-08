import React from 'react';
import './index.less';
import Api from '../../request/api';


class Home extends React.Component {
    componentDidMount() {
        let params = {
            id: 186016,
            limit: 1
        }
        Api.commentMusic(params).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className='home'>我是首页</div>
        )
    }
}

export default Home;