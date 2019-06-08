import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Header, Container, Button, Form } from 'semantic-ui-react';
import { LabelInputField, InputField } from 'react-semantic-redux-form';
import validateRegForm from '../../containers/validateRegForm';

const RegisterForm = props => {
  return (
    <Container text>
      <Header size="huge" style={{ fontSize: 26 }}>
        Register
      </Header>
      <Form error>
        <label>Username</label>
        <Field
          name="username"
          component={InputField}
          // labelPosition="left"
          placeholder="Username"
          // required
          // type="input"
        >
          {/* <Input /> */}
        </Field>
        <label>Email</label>
        <Field
          name="email"
          component={LabelInputField}
          labelPosition="left"
          placeholder="Email"
          required
          type="email"
          // minlength={3}
        />
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </Form.Field>
        <label>Password</label>
        <Field
          name="password"
          component={LabelInputField}
          type="password"
          labelPosition="left"
          placeholder="Password"
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
};

export default reduxForm({
  form: 'RegForm', // a unique identifier for this form
  validateRegForm
})(RegisterForm);
