import * as phoneBookActions from "../../redux/phonebookActions.js";
import { connect } from 'react-redux';
import ContactList from './contactList.js';

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    filter: state.contacts.filter,
})

const mapDispatchToProps = (dispatch) => ({
    onDeleteContact: (e, id) => dispatch(phoneBookActions.deleteContact(e, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)