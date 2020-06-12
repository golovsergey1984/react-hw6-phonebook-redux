import React, { Component, Fragment } from 'react';
import Logo from './Logo/logo.js';
import styles from './main.module.css';
import ContactForm from './ContactForm/contactFormContainer.js';
import SearchForm from "./SearchForm/searchFormContainer";
import ContactList from "./ContactList/contactListContainer.js";
import DublicateNotification from "./DublicateNotification/dublicateNotification.js";
import * as phoneBookActions from "../redux/phonebookActions.js";
import { connect } from 'react-redux';


class App extends Component {
    state = {
        isLoad: false,
        dublicate: false,
    }

    componentDidMount() {
        this.setState({ isLoad: true })
        const persistedContacts = localStorage.getItem("contacts");

        if (persistedContacts) {
            this.props.localStorageDbAdd(JSON.parse(persistedContacts))
        }
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.dublicate !== this.state.dublicate) {
            setTimeout(() => { this.setState({ dublicate: false }) }, 3000)
        }
        if (prevProp.contacts !== this.props.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.props.contacts))
        }
    }

    handleChangeStatus = () => {
        this.setState({ dublicate: true })
    }

    render() {
        const { isLoad, dublicate } = this.state;

        return (
            <Fragment>
                <div className={styles.wrapper}>
                    <Logo isLoad={isLoad} />
                    <ContactForm
                        changeStatus={this.handleChangeStatus}
                    />
                    {this.props.contacts.length > 1 &&
                        <SearchForm />}
                    <ContactList />
                </div>
                {dublicate &&
                    <DublicateNotification status={dublicate} />}
            </Fragment>
        );
    }

}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    filter: state.contacts.filter,
})

const mapDispatchToProps = (dispatch) => ({
    localStorageDbAdd: (value) => {
        dispatch(
            phoneBookActions.contactLocalDBAdd(value)
        );
    }


})

export default connect(mapStateToProps, mapDispatchToProps)(App)