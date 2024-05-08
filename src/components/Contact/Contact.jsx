import css from './Contact.module.css';
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDelete }) => {
    return (
        <li className={css.item}>
            <div className={css.contactInfo}>
                <p><IoPersonSharp className={css.icon} />{contact.name}:</p>
                <p><FaPhone className={css.icon} />{contact.number}</p>
            </div>
            <div className={css.buttonWrp}>
                <button type="button" id={contact.id} onClick={() => onDelete(contact.id)} className={css.button}>
                    Delete
                </button>
            </div>
            </li>
    )
}

export default Contact;