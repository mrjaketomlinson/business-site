import React, { Component } from 'react';

import Calendar from 'react-big-calendar';
import moment from 'moment';

import '../Home.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class CalendarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          start: new Date('September 22, 2018 04:00:00'),
          end: new Date(moment().add(2, 'days')),
          title: 'Some Event'
        }
      ]
    };
  }

  render() {
    return (
      <Calendar
        defaultDate={new Date()}
        defaultView='month'
        events={this.state.events}
        style={{ height: '60vw' }}
      />
    );
  }
}

export default CalendarComponent;