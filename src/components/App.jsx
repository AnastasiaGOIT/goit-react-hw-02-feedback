import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import { Section } from './Section/Section';

// import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ul className="btn__list">
          <li>
            <button className="btn" onClick={this.handleClickGood}>
              Good
            </button>
          </li>
          <li>
            <button className="btn" onClick={this.handleClickNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button className="btn" onClick={this.handleClickBad}>
              Bad
            </button>
          </li>
        </ul>
        <div>
          <h3>Statistics</h3>
          <ul className="statistic__list">
            <li>
              <p>Good:</p>
              <span>{this.state.good}</span>
            </li>
            <li>
              <p>Neutral:</p>
              <span>{this.state.neutral}</span>
            </li>
            <li>
              <p>Bad:</p>
              <span>{this.state.bad}</span>
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
        {/* <Section title=''>
          <FeedbackOptions
            onClick={this.state.handleClick}
            value={this.state.value}
          />
          <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
        </Section> */}
      </div>
    );
  }
}
