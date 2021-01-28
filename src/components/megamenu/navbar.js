import React from 'react';
import { Link } from 'gatsby';
import CallEmailBtns from './CallEmailBtns';
import ServicesMenu from './ServicesMenu';

const NavbarBurger = (props) => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };

  render() {
    return (
      <nav className='navbar has-background-white-bis has-shadow'>
        <div className='container'>
          <div className='navbar-brand'>
            <NavbarBurger
              active={this.state.activeMenu}
              toggleMenu={this.toggleMenu}
            />
          </div>
          <div
            className={`navbar-menu ${
              this.state.activeMenu ? 'is-active' : ''
            }`}
          >
            <div className='navbar-start'>
              <Link to={'/'} className='navbar-item' href='/'>
                Home
              </Link>
              <ServicesMenu />
            </div>
            <div className='navbar-end has-background-white-bis'>
              <div className='navbar-item'>
                <CallEmailBtns />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
