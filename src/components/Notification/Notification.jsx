import s from './Notification.module.css';
import propTypes from 'prop-types';

const Notification = ({message}) => {
  return <h3 className={s.message}>{ message}</h3>;
};
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;