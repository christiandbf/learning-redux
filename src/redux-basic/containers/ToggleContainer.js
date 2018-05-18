import { connect } from 'react-redux';

import seeMessage from '../actions/seeMessage';
import hideMessage from '../actions/hideMessage';

import Toggle from '../components/Toggle';

const mapStateToProps = state => ({
  isMessageVisible: state.messageVisibility
});

const mapDispatchToProps = dispatch => ({
  seeMessage: () => dispatch(seeMessage()),
  hideMessage: () => dispatch(hideMessage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);