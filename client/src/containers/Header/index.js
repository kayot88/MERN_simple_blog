import { connect } from 'react-redux';
import Header from './Component';
import { logoutUser } from '../../actions/authActions';

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
