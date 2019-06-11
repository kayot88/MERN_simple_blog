import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Header, Container, Button, Form, Message } from 'semantic-ui-react';
import { InputField } from 'react-semantic-redux-form';
import Alert from '../../components/Alert';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { err: null };
  }
  onSubmit = ({ username, password }) => {
    return this.props.loginAction(username, password);
  };
  componentDidUpdate() {
    if (this.props.token) {
      this.props.history.push('/');
    }
  }
  componentWillUpdate() {
    if (this.props.token) {
      this.props.history.push('/');
      this.forceUpdate();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ error: nextProps.error });
    }
  }

  render() {
    const MessageWarning = () => (
      <Message warning>
        <Message.Header>
          You must register before you can do that!
        </Message.Header>
        <p>Visit our registration page, then try again.</p>
      </Message>
    );
    const { err } = this.props;
    // const Err = Object.values(err);
    return (
      <Container text>
        <Header size="huge" style={{ fontSize: 26 }}>
          Login
        </Header>
        <Form error onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {err && <MessageWarning />}
          {/* <MessageWarning /> */}
          <label>Username</label>
          <Field
            name="username"
            component={InputField}
            placeholder="Username"
            required
            type="input"
            minLength={3}
            maxLength={15}
          />
          <label>Password</label>
          <Field
            name="password"
            component={InputField}
            type="password"
            placeholder="Password"
            required
            minLength={3}
            maxLength={20}
          />
          <Button
            style={{ backgroundColor: 'green', color: 'white' }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
