import React from 'react';
import Nav from './components/nagtive/nav.jsx';


const Test4 = React.createClass({
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
				<Nav active={4}  />
                {this.state.nameOne}
				<div id={"banner"}>
					 {"moudle_four"}
				</div>
            </div>
        );
    }
});

export default Test4;