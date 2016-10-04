import React from 'react';
/*引入多张图片的时*/
var json = {
	src:require('./12.jpg'),
	src1:require('./123.jpg'),
	//sup:require('../../outfun.js'),
} 
/*取得与父级同级别的文件../*/
//console.log(json.src):
//import goBtn from '12.jpg';
require('./navcss.scss');



class Nav extends React.Component{
	constructor(props){
		super(props);
		//this.clickHandler = this.clickHandler.bind(this);
		//函数同一绑定可以避免先加载
		this.clickHandler = this.clickHandler.bind(this);
		console.log(props);
	}
	
	componentDidMount(){
	
		// this.refs.
		//setTimeout(function (){
			//(function (){
				//tabtunfun();
			//})()
		//},0);
		//setTimeout(function (){
			//console.log(this.tabfunfun);
		//});
		//window.onload = function (){
			console.log(tabfunfun);
		//}
		//console.log(window.CaiTuo);
		
		/*
       if(this.props.active == 1){
			console.log(1);
	   }else if(this.props.active == 2){
		   
	   }else{
		   
	   }*/
	 
	   if(this.props.active){
		   var aList = document.querySelectorAll('#list li');
		   console.log(this.props.active-1);
		   aList[this.props.active-1].className = "headstyle active";
	   }
    }
	clickHandler(index){
		location.href = location.origin + '#/test'+index;
	}
    render() {
        return (
            <ul id={'list'}>
               <li className={'headstyle'} onClick={this.clickHandler.bind(this,1)}>1111111111</li>
			   <li className={'headstyle'} onClick={this.clickHandler.bind(this,2)}>2222222222</li>
			   <li className={'headstyle'} onClick={this.clickHandler.bind(this,3)}>3333333333</li>
               <li className={'headstyle'} onClick={this.clickHandler.bind(this,4)}>522224</li>
			   <li><img  src={json.src1} /></li>
            </ul>
        )
    }
};

export default Nav;
