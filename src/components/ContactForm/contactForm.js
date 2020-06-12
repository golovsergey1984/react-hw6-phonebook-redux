import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './contactForm.module.css';
import { validateAll } from 'indicative/validator';

const rules = {
    name: 'required|alpha',
    number: 'required|number',
};

const messages = {
    alpha: 'Name must contain letters only!!',
    number: 'Phone must contain numeral only!!',
    'name.required': 'this field is required',
    'number.required': 'this field is required',
};

const nameAlreadyExist = (name, contacts) => {
    return contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
};
const numberAlreadyExist = (number, contacts) => {
    return contacts.filter(
        contact => contact.number.toLowerCase() === number.toLowerCase(),
    );
};

export default class ContactForm extends Component {

    onContactToAdd(e, name, number, contacts, errors) {
        e.persist()
        e.preventDefault();

        if (errors) {
            this.resetError();
        }
        const nameExist = nameAlreadyExist(name, contacts);
        const numberExist = numberAlreadyExist(number, contacts);

        if ((nameExist.length !== 0) && (numberExist.length !== 0)) {
            this.props.changeStatus()
            return
        }

        validateAll({ name, number }, rules, messages)

            .then(data => {
                this.props.onSubmitForm(e, shortid.generate(), name, number);
                this.props.nameToClear();
                this.props.numberToClear();
            })
            .catch(errors => {



                const formattedErrors = {};
                errors.forEach(error => {
                    formattedErrors[error.field] = error.message;
                });
                this.setState({ errors: formattedErrors });

            })

    }


    resetError = () => {
        this.setState({
            errors: {
                ...this.state.errors,
                name: null,
                number: null
            }
        })
    };

    render() {
        const { name, number, onChangeInputName, onChangeInputNumber } = this.props;
        const errors = this.state;

        return (

            <div className={styles['contactForm-box']}>
                <div className={styles['contactForm-wrapper']}>
                    <form onSubmit={(e) => this.onContactToAdd(e, this.props.name, this.props.number, this.props.contacts, errors)} >
                        <label>
                            <p className={styles['contactForm-input-title']}>Name</p>
                            <input
                                type="text"
                                className={styles['contactForm-input']}
                                name="name"
                                value={name}
                                autoComplete="off"
                                onChange={onChangeInputName}
                                placeholder="Type contact name..."
                            />
                            {errors && <span className={styles.error}>{this.state.errors.name}</span>}
                        </label>


                        <label>
                            <p className={styles['contactForm-input-title']}>Number</p>
                            <input
                                type="text"
                                className={styles['contactForm-input']}
                                name="number"
                                value={number}
                                autoComplete="off"
                                onChange={onChangeInputNumber}
                                placeholder="Type contact number..."
                            />
                            {errors && <span className={styles.error}>{this.state.errors.number}</span>}
                        </label>
                        <div className={styles['contactForm-btn-box']}>
                            <button type="submit" className={styles['contactForm-btn']}>Add contact</button>
                        </div>
                    </form>
                </div>
            </div >


        )
    }
}

ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    onChangeInputName: PropTypes.func.isRequired,
    onChangeInputNumber: PropTypes.func.isRequired,
    nameToClear: PropTypes.func.isRequired,
    numberToClear: PropTypes.func.isRequired,
    onError: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
};