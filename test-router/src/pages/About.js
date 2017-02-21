import React from 'react';

export default class About extends React.Component {
   render() {
      return (
         <div>
	        <div className="page-header">
	          <h1>About Me</h1>
	        </div>
	        <div className="well">
	            <p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>
	            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
	        </div>

	        <a href="#" className="btn btn-default">Default</a>
	        <a href="#" className="btn btn-primary">Primary</a>
	        <a href="#" className="btn btn-success">Success</a>
	        <a href="#" className="btn btn-info">Info</a>
	        <a href="#" className="btn btn-warning">Warning</a>
	        <a href="#" className="btn btn-danger">Danger</a>
	        <a href="#" className="btn btn-link">Link</a>
	    </div>  
      )
   }
}