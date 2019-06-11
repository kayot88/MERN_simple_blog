import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import validateRegForm from '../validateRegForm';
import LoginForm from './Component';
import { loginAction } from '../../actions/authActions';

const mapStateToProps = state => ({
  err: state.err,
  token: state.auth.token,
  user: state.auth.user,
  loading: state.auth.loading
});

export default compose(
  reduxForm({ form: 'login', validateRegForm }),
  connect(
    mapStateToProps,
    { loginAction }
  )
)(withRouter(LoginForm));
