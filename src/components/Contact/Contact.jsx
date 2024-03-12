import { BiSolidGroup } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import css from "./Contact.module.css";

const Contact = ({ onDelete, data: { name, number, id } }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };
  return (
    <div className={css.container}>
      <div className={css.box}>
        <p className={css.text}>
          <BiSolidGroup className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <BiPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
