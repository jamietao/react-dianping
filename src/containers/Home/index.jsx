import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName='上海' />
                <Category />
                <div style={{ height: '15px' }}>{/* 分割线 */}</div>
            </div>
        )
    }
}

export default Home;
