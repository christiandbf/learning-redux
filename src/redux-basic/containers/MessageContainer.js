import { connect } from 'react-redux';

import changeMessage from '../actions/changeMessage';

import Message from '../components/Message';

const mapStateToProps = state => ({
  see: state.messageVisibility,
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  changeMessage: message => dispatch(changeMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);