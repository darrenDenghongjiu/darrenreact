import React from 'react';
import Nav from './components/nagtive/nav.jsx';
import Slider from '../../node_modules/react-slick';
//https://www.npmjs.com/package/react-slick 参数详解
//node_modules\react-slick
//node_modules\react-slick\node_modules\object-assign
//var outfun = require('./outfun.js');
//导入多个某块的情况马上测试


class Test1 extends React.Component {
    constructor(props) {
        super(props);
		console.log(props);
       
    }
	
	componentDidMount(){
		console.log(Slider);
      // 搜索组件渲染完成 已经出现在dom文档里
	  //getBoundingClientRect 获取客户端的物体信息绝对值；
		//refs of use
		//refs 用于操作本页面的导入模块
		//console.log(this.refs.nav);
		var arr = [1,2,3,4,5];
		//var dom = React.Children.map(arr,function (i){
			//console.log(i);
		//});
		//console.log(dom);
		//console.log(this.refs.city.value=12);
		
		
	}
	componentWillMount(){
		//// 组件出现前 就是dom还没有渲染到html文档里面
		
	}
    render() {
		let settings = {
            dots: 123,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
			initialSlide:false,
			autoplay:true,
			//variableWidth
        };
        return (
            <div>
				<div className="cover">
					<Slider {...settings}>
						 <div>1</div>
						 <div>2</div>
						 <div>3</div>
						 <div>4</div>
						 <div>5</div>
						 <div>6</div>
				    </Slider>
				</div>
				  
				<Nav active={1} ref="nav" />
				<input value={''} ref="city" />
				 <div id={"banner"}>
					 {"moudle_one"}
				 </div>
				 
            </div>
        );
    }
}



export default Test1;