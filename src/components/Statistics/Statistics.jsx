import s from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={s.section}>  
        <p  className={s.text}>Good: {good}</p>
        <p className={s.text}>Neutral: {neutral}</p>
        <p className={s.text}>Bad: {bad}</p>
        <p className={s.text}>Total: {total}</p>
        <p className={s.text}>Positive feedback: {positivePercentage}%</p>
    </div>
);
    
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;