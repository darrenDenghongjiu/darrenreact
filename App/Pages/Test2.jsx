import React from 'react';
import Nav from './components/nagtive/nav.jsx';


const Test2 = React.createClass({
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
				<Nav active={2} />
                {this.state.nameOne}
				 <div id={"banner"}>
					 {"moudle_two"}
				</div>
            </div>
        );
    }
});

export default Test2;