import * as phoneBookActions from "../../redux/phonebookActions.js";
import { connect } from 'react-redux';
import SearchForm from './searchForm.js';

const mapStateToProps = state => ({
    filter: state.contacts.filter,
})

const mapDispatchToProps = (dispatch) => ({
    onChangeInputFilter: (e) => dispatch(phoneBookActions.filterName(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)