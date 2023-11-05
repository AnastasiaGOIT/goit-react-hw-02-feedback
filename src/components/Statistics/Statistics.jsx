import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <ul className="statistic__list">
        <li className="statistic-item">
          <p>Good:</p>
          <span>{good}</span>
        </li>
        <li>
          <p>Neutral:</p>
          <span>{neutral}</span>
        </li>
        <li>
          <p>Bad:</p>
          <span>{bad}</span>
        </li>
        <li>
          <p>Total:</p>
          <span>{total}</span>
        </li>
        <li>
          <p>Positive feedback:</p>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
