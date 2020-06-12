import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import slideTransition from '../../transitions/slide.module.css';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';



export default class ContactList extends Component {
    nameFilter = (filter, contacts) => {
        if (filter !== undefined) {
            return (
                contacts.filter(contact =>
                    contact.name.toLowerCase().includes(filter.toLowerCase()),
                ));
        }
        return contacts
    }

    render() {
        const nameFiltered = this.nameFilter(this.props.filter, this.props.contacts);

        return (
            < div >
                <TransitionGroup component="ul" className={styles['contactList-ul']}>
                    {nameFiltered.map(item => (
                        <CSSTransition key={item.id} timeout={1000} classNames={slideTransition} unmountOnExit>
                            <li className={styles['contactList-item-box']}>
                                <div className={styles['contactList-item-wrapper']}>
                                    <div className={styles['contactList-item-name']}>{item.name}</div>
                                    <div className={styles['contactList-item-number']}>{item.number}</div>
                                    <div className={styles['contactList-item-btn']}>
                                        <button
                                            type="button"
                                            name="delte"
                                            onClick={() => this.props.onDeleteContact(item.id)}
                                            className={styles['contactList-btn-delete']}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </CSSTransition>
                    ))}

                </TransitionGroup>
            </div >
        )
    }
}




ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
};