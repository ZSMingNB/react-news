import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
export default class PCNewsBlock2 extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://115.159.144.245/API/index.php/Api/ComNoticeApi/notice").then(function(response){console.log(response)})
	};
	render() {
		const {news} = this.state;
		
		return (
			<div class="topNewsList">
				<Card>
					<ul>
						{news}
					</ul>
				</Card>
			</div>
		);
	};
}
