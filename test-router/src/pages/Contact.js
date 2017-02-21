import React from 'react';

export default class Contact extends React.Component {
   render() {
      return (
         <div>
         	<div className="page-header">
            	<h1>Let's get together</h1>
            </div>

            <div className="row">
		        <div className="col-md-6 text-center">
		        	<span>
		        		<input type="text" className="form-control" placeholder="Your Name" />
		        	</span>
		        	<span>
		        		<input type="text" className="form-control" placeholder="Your Name" />
		        	</span>
		        </div>
		        <div className="col-md-6 text-center">
		        	<textarea className="form-control">
		                		Whats on your mind!
		            </textarea>
		        </div>
		        <div className="col-md-6 text-center">
		        	<button type="submit" className="btn btn-success">Send It!</button>
		        </div>
         	</div>
         </div>
      )
   }
}