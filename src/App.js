import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
import { Button } from './components/Button';
import Loader from './components/Loader';
import UserProfile from './components/UserProfile';

import { getUsers } from './utils/apiCalls';
import { invertTheme, getColor } from './utils/theme';

class App extends Component {
  state = {
    users: [],
    themeInverted: false,
  };

  invertTheme = () => {
    this.setState(state => ({
      themeInverted: !state.themeInverted,
    }));
  };

  async componentDidMount() {
    let users;
    try {
      users = (await getUsers(20)).results;
    } catch (e) {
      console.warn(e);
      users = [];
    }
    this.setState({ users: users });
  }

  render() {
    const { users, themeInverted } = this.state;
    return themeInverted ? (
      <ThemeProvider theme={invertTheme}>
        <AppPresentional
          users={users}
          className={this.props.className}
          invertTheme={this.invertTheme}
        />
      </ThemeProvider>
    ) : (
      <AppPresentional
        users={users}
        className={this.props.className}
        invertTheme={this.invertTheme}
      />
    );
  }
}

const AppPresentional = ({ className, invertTheme, users }) => (
  <div className={className}>
    <Header invertTheme={invertTheme}>
      <p>Random People</p>
      <Button onClick={invertTheme}>Invert Theme</Button>
    </Header>
    {users.length ? (
      <Main>
        <Switch>
          <Route
            path="/user/:email"
            render={({ match: { params: { email } } }) => {
              return <UserProfile user={users.find(u => u.email === email)} />;
            }}
          />
          <Route render={() => <Home users={users} />} />
        </Switch>
      </Main>
    ) : (
      <Loader />
    )}
  </div>
);

export default styled(App)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background: ${getColor('light')}
  font-family: 'Roboto', sans-serif;
`;
