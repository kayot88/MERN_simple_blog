import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import Container from '../../components/Container';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

class Header extends Component {
  handleLogout = () => {
    this.props.logoutUser()
  }
  
  componentDidMount(){
    if (this.props.token) {
      const {user} = this.props
    }
  }

  componentWillMount() {
    const { user } = this.props;
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <Container>
        {user ? (
          <Menu inverted>
            <Menu.Item href="/">Home</Menu.Item>

            <Menu.Item href="/logout" onClick={this.handleLogout}>
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <Menu inverted>
            <Menu.Item href="/">Home</Menu.Item>
            <Menu.Item href="/register">Register</Menu.Item>
            <Menu.Item href="/login">Login</Menu.Item>
          </Menu>
        )}
      </Container>
    );
  }
}
export default Header;
