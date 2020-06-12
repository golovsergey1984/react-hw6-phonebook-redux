import * as phoneBookActions from "../../redux/phonebookActions.js";
import { connect } from 'react-redux';
import ContactForm from './contactForm.js';

const mapStateToProps = state => ({
    name: state.name,
    number: state.number,
    contacts: state.contacts.contacts,
})


const mapDispatchToProps = (dispatch) => ({

    onChangeInputName: (e) => dispatch(phoneBookActions.nameToAdd(e)),
    onChangeInputNumber: (e) => dispatch(phoneBookActions.numberToAdd(e)),
    nameToClear: () => dispatch(phoneBookActions.nameToClear()),
    numberToClear: () => dispatch(phoneBookActions.numberToClear()),
    onSubmitForm: (e, id, name, number) => {
        e.preventDefault();
        dispatch(
            phoneBookActions.contactFormToAdd(id, name, number)
        );

    }


})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)