import { connect } from 'react-redux';

import fetchData from '../actions/fetchData';

import Fetch from '../components/Fetch';

const mapStateToProps = state => ({
  id: state.id
});

const mapDispatchToProps = dispatch => ({
  fetchData: id => dispatch(fetchData(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Fetch);