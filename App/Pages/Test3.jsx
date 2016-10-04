import React from 'react';
import Nav from './components/nagtive/nav.jsx';


const Test3 = React.createClass({
    getInitialState(){
        return {
            nameOne: ''
        };
    },
    componentDidMount(){
        this.setState({
            nameOne: sessionStorage.nameOne
        });
    },

    render(){
        return (
            <div>
				<Nav active={3}/>
                {this.state.nameOne}
				<div id={"banner"}>
					 {"moudle_three"}
				</div>
            </div>
        );
    }
});

export default Test3;