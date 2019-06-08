import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router';
import 'semantic-ui-less/semantic.less';
import Home from './pages/Home';
import Register from './pages/Register';
import store from './store';
import theme from './theme';

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href =
  'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <>
              <Menu inverted>
                <Menu.Item href="/">Home</Menu.Item>
                <Menu.Item href="/register">Register</Menu.Item>
                {/* <Menu.Item href="/register">Register</Menu.Item> */}
              </Menu>
              {/* <Header /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
              </Switch>
            </>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}
