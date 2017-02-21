import React, {Component} from 'react';

export default class Footer extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
		        <footer className="footer">
		        	 <div>
			        	<a href="mailto:phanikumar.venkata@gmail.com" className="footerlink">Have something to say? 🤘</a>
			        </div>
		        </footer> 
		    </div>   
		);
	}
}