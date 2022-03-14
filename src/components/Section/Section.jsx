import s from './Section.module.css';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
export default Section;