import React from 'react'
import moment from 'moment';

const Date = (props) => {
  const { date, mute } = props;

  const countLiteral = ['one', 'two', 'three'];

  const daysBeforeLimit = 3;
  const daysAfterLimit = 3;
  let classModifier = '--none';
  let dateRelativeText = '';
  if (date !== undefined) {
    dateRelativeText = moment(date).format('MMMM D')
    if (moment(date).isBefore(moment())) {
      classModifier = mute ? '--muted':'--overdue';

      if (moment().diff(moment(date), 'days') <= daysAfterLimit) {
        const daysDiff = moment().diff(moment(date), 'days');
        dateRelativeText = `${countLiteral[daysDiff - 1]} day${daysDiff > 1 ? 's':''} ago`;
      }
    }
    if (moment(date).isAfter(moment())) {
      classModifier = '--notdue';

      if (moment(date).diff(moment(), 'days') <= daysBeforeLimit) {
        const daysDiff = moment(date).diff(moment(), 'days');
        dateRelativeText = `in ${countLiteral[daysDiff - 1]} day${daysDiff > 1 ? 's':''}`;
      }
    }
    if (moment(date).isSame(moment().startOf('day'))) {
      classModifier = '--today';
      dateRelativeText = 'Today';
    }
  }

  return (
    <div className="date">
      <div className={`date${classModifier}`}>
        {dateRelativeText}
      </div>
    </div>
  )
}

export default Date;