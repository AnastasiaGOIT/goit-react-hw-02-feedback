import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

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
        // neutral: prevState.neutral + 1,
        // bad: prevState.bad + 1,
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const feedbackValues = [good, neutral, bad];

    const total = feedbackValues.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    const percentage = (good / total) * 100;
    return Math.round(percentage);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="" />
        <FeedbackOptions
          onGood={this.handleClickGood}
          onNeutral={this.handleClickNeutral}
          onBad={this.handleClickBad}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </div>
    );
  }
}
