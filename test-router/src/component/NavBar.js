import React from 'react';
import { Link} from 'react-router'

export default class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

      //var { pathname } = this.props.location;
     var pathname = this.props.pathname;
      console.log('NavBar Pathname : ..' + pathname);
      console.log(this.props);

      const homeLinkStyle = pathname === "/" ? "active" : "";
      const aboutLinkStyle = pathname.match("about") ? "active" : "";
      const articlesLinkStyle = pathname.match("articles") ? "active" : "";
      const contactLinkStyle = pathname.match("contact") ? "active" : "";
      const featuredLinkStyle = pathname.match("featured") ? "active" : "";

      const { collapsed } = this.state;
      const navClass = collapsed ? "collapse" : "";

      return (
        <div>
          <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Phani Kumar</a>
                </div>
                <div id="navbar" className={"navbar-collapse " + navClass}>
                  <ul className="nav navbar-nav">
                    <li className={homeLinkStyle}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={aboutLinkStyle}>
                      <Link to="about">About</Link>
                    </li>
                    <li className={articlesLinkStyle}>
                      <Link to="articles">Articles</Link>
                    </li>
                    <li className={featuredLinkStyle}>
                      <Link to="featured">Featured</Link>
                    </li>
                    <li className={contactLinkStyle}>
                      <Link to="contact">Contact</Link>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>

          </div>

      )
   }
}