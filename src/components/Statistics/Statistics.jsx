import css from './Statistics.module.css';

export const Statistics = () => {
  return (
    <div>
      <h3>Statistics</h3>
      <ul className="statistic__list">
        <li>
          <p>Good:</p>
          <span>0</span>
        </li>
        <li>
          <p>Neutral:</p>
          <span>0</span>
        </li>
        <li>
          <p>Bad:</p>
          <span>0</span>
        </li>
        <li>
          <p>Total:</p>
          <span>0</span>
        </li>
        <li>
          <p>Positive feedback:</p>
          <span>0</span>
        </li>
      </ul>
    </div>
  );
};
