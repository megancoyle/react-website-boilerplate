import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../stylesheets/Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({windowWidth: window.innerWidth});
  }

  navigationLinks() {
    return [
      <ul onClick={this.handleNavClick.bind(this)} key={11} className="menu-main">
        <li key={21}>
          <Link to="about">
            About
          </Link>
        </li>
        <li key={22}>
          <Link to="Services">
            Services
          </Link>
        </li>
      </ul>
    ];
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  renderNavigation() {
    if(this.state.windowWidth <= 650) {
      return [
        <div key={101} className="mobile_nav">
          <div onClick={this.handleNavClick.bind(this)}><p>Menu</p>
            <div className="menu-button">
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </div>
          </div>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={102} className="nav_menu">
          {this.navigationLinks()}
        </div>
      ];
    }
  }

  render() {
    return (
      <header className="clearfix">
        <div className="container">
          <div id="logo">
            <a href="/"><h1>travelr</h1></a>
          </div>
          <div className="menu">
          {this.renderNavigation()}
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
