import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btn__list}>
      <li>
        <button className={css.btn} onClick={() => onLeaveFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};
