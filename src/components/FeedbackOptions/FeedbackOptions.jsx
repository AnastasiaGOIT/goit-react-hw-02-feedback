import css from './FeedbackOptions.css';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <ul className="btn__list">
      <li>
        <button className="btn" onClick={onGood}>
          Good
        </button>
      </li>
      <li>
        <button className="btn" onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button className="btn" onClick={onBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};
