import React from 'react';

import Footer from './Footer'
import NavBar from './NavBar'


export default class App extends React.Component {
   render() {
      const { pathname } = this.props.location;

      return (
         <div>
            <NavBar pathname={pathname} />
				
            {this.props.children}

            <Footer />
         </div>
      )
   }
}