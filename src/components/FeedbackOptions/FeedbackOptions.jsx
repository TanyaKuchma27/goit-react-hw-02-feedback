import s from './FeedbackOptions.module.css';
import propTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <ul className={s.list}>
      {options.map(option => {
        return (
          <li key={option} className={s.item}>
            <button              
              type="button"
              onClick={() => onLeaveFeedback(option)}
              className={s.button}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;