import React from 'react'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>正在加载...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            // 更改状态
            this.setState({
                initDone: true
            })
        }, 300);
    }
}

export default App;