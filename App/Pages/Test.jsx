import React from 'react';




let Test = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState(){
        return {
            name: ''
        }
    },
    componentDidMount(){
        this.setState({
            name: '被咯苏州'
        });
    },

    pushTest1(){
       // sessionStorage.nameOne = '我是被咯苏州';
        this.context.router.push('/test1');
		
    },
	 pushTest2(){
       // sessionStorage.nameOne = '我是被咯苏州';
        this.context.router.push('/test1');
		
    },
	 pushTest3(){
       // sessionStorage.nameOne = '我是被咯苏州';
        this.context.router.push('/test2');
		
    },
	 pushTest4(){
       // sessionStorage.nameOne = '我是被咯苏州';
        this.context.router.push('/test3');
		
    },

    render(){
		console.log('11111111111');
        return (
            <div>
                {this.state.name}
				<ul>
					<li onClick={this.pushTest1} >11111111111111</li>
					<li onClick={this.pushTest2}>2222222222222</li>
					<li onClick={this.pushTest3}>33333333333333</li>
					<li onClick={this.pushTest4}>4444444444444444444</li>
				</ul>
                <button >点击跳转下个界面</button>
				<div>我们的明天会 更好</div>
            </div>
        );
    }
});

export default Test;