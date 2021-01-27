import React from 'react';
import { Link } from 'gatsby';
import { FaRegEnvelope } from 'react-icons/fa';

import ResponseTapBtn from './callBtn';

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
              {/*TODO: ADD URL*/}
              <Link to={'/'} className='navbar-item'>
                Home
              </Link>
              <div class='navbar-item has-dropdown is-hoverable'>
                <a class='navbar-link'>More</a>
                <div class='navbar-dropdown'>
                  <Link to={'/about'} class='navbar-item'>
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className='navbar-end has-background-white-bis'>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <ResponseTapBtn />

                  <p className='control'>
                    <a className='button is-primary' href='/'>
                      <span className='icon'>
                        <FaRegEnvelope />
                      </span>
                      <span>Send email</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
