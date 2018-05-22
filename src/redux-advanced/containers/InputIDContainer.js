import { connect } from 'react-redux';

import selectID from '../actions/selectID';

import InputID from '../components/InputID';

const mapStateToProps = state => ({
  id: state.id
});

const mapDispatchToProps = dispatch => ({
  selectID: id => dispatch(selectID(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(InputID);