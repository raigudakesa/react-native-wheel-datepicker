import React, { PureComponent } from 'react';
import { DatePickerIOS } from 'react-native';
import PropTypes from 'prop-types';

export default class DatePicker extends PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    maximumDate: PropTypes.instanceOf(Date),
    minimumDate: PropTypes.instanceOf(Date),
    mode: PropTypes.oneOf(['date', 'time', 'datetime']),
    onDateChange: PropTypes.func.isRequired,
    minuteInterval: PropTypes.number,
  };

  static defaultProps = {
    mode: 'date',
    date: new Date(),
    minuteInterval: 1,
  };

  state = {
    date: null,
    minuteInterval: 1,
  };

  onDateChange = (date) => {
    this.setState({ date });
    this.props.onDateChange(date);
  };

  componentWillMount() {
    this.setState({ date: this.props.date });
  }

  componentDidMount() {
    this.setState({ minuteInterval: this.props.minuteInterval });
  }

  componentWillReceiveProps({ date }) {
    this.setState({ date, minuteInterval: this.props.minuteInterval });
  }

  render() {
    return (
      <DatePickerIOS
        {...this.props}
        minuteInterval={this.state.minuteInterval}
        onDateChange={this.onDateChange}
        date={this.state.date}
      />
    );
  }

  getValue() {
    return this.state.date;
  }
}
