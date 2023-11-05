import css from './FeedbackOptions.css';

export const FeedbackOptions = ({ handleClick }) => {
  return (
    <ul className="btn__list">
      <li>
        <button className="btn" onClick={handleClick}>
          Good
        </button>
      </li>
      <li>
        <button className="btn" onClick={handleClick}>
          Neutral
        </button>
      </li>
      <li>
        <button className="btn" onClick={handleClick}>
          Bad
        </button>
      </li>
    </ul>
  );
};
