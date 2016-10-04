import React from 'react';
require('./header.less');
require('./logo.svg');

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active
        }
		
    }
    render() {
        return (
            <header className="nav">
                <Main active={this.state.active} />
            </header>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Logo />
                <List classList={
                        ['list']
                    }
                    items={
                        [	
							{itemLink: '#/account', itemContent: '我的贝壳家'},
                            {itemLink: '#/works', itemContent: '案例'},
                            {itemLink: '#/orders', itemContent: '订单'},
                            {itemLink: '#/finance', itemContent: '财务'},
							{itemLink: '#/profile', itemContent:null},
                            {itemLink: '#/logout', itemContent: '退出'},
                        ]
                    }
                    active={this.props.active} />
            </div>
        )
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
				<a href={'#/account'}>
					<img src={'images/nav.png'} />
				</a>
            </div>
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        var itemClassList =  [
                new Set(['item', 'left']),
                new Set(['item', 'left']),
                new Set(['item', 'left']),
                new Set(['item', 'left']),
                new Set(['item', 'right set']),
				new Set(['item', 'right']),
        ];
        itemClassList[props.active].add('active');
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            itemClassList: itemClassList
        }
    }
    render() {
        var self = this;
        var items = this.props.items.map( (item, index) => {
            return <Item classList={self.state.itemClassList[index]} clickHandler={self.clickHandler} itemLink={item.itemLink} itemContent={item.itemContent} key={index} itemIndex={index} />
        })
        return (
            <ul className={this.props.classList.join(' ')}>
                {items}
            </ul>
        )
    }
    clickHandler(i, e) {
        var self = this;
        let itemClassList = this.state.itemClassList.map( (item, index) => {
            let target = this.state.itemClassList[index];
            if ( i == index ) {
                if (target.has('active')) {
                    return target;
                };
                target.add('active');
                return target;
            }

            if (target.has('active')) {
                target.delete('active');
            }

            return target;
        })

        this.setState({
            itemClassList: itemClassList
        })

    }
}

class Item extends React.Component {
    constructor(...args) {
        super(...args);

        this.clickHandler = this.clickHandler.bind(this);

    }
	
    render() {
        var classList = Array.from(this.props.classList);
        return (
            <li onClick={this.clickHandler} className={classList.join(' ')}>
				<p></p>
                <a href={this.props.itemLink}>{this.props.itemContent}</a>
            </li>
        )
    }
	componentDidMount(){
		/*创建头部class*/
		var arr = ['account','works','orders','finance','profile','login'];
		function bodyClassName(){
			for(var i=0;i<arr.length;i++){
				if(location.hash.indexOf(arr[i])!=-1){
					$(document.body).attr('class',arr[i]+'main');
				}
			}
		}
		bodyClassName();
		jQuery(function($){
			window.addEventListener('hashchange',function (){
				bodyClassName();
			},false);
		});
	}
    clickHandler() {
		console.log(this.props.itemIndex);
        this.props.clickHandler(this.props.itemIndex, this);
    }

}
export default Navigation;