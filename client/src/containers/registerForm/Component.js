import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Header, Container, Button, Form } from 'semantic-ui-react';
import { InputField } from 'react-semantic-redux-form';
import Alert from '../../components/Alert'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { err: null };
  }
  onSubmit = ({ username, password, email }) => {
    return this.props.registerAction(username, password, email);
  };
  componentDidUpdate() {
    if (this.props.token) {
      this.props.history.push('/');
    }
  }
  componentDidMount() {
    if (this.props.token) {
      this.props.history.push('/');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ error: nextProps.error });
    }
  }
  render() {
    const { err } = this.props;
    const Err = Object.values(err);
    return (
      <Container text>
        <Header size="huge" style={{ fontSize: 26 }}>
          Register
        </Header>
        <Form error onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {Err && <Alert>{Err}</Alert>}
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
          <label>Email</label>
          <Field
            name="email"
            component={InputField}
            placeholder="Email"
            required
            type="email"
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

export default RegisterForm;
