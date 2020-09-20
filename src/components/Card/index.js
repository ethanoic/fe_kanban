import React from 'react';
import ColorInitial from '../ColorInitial';
import Date from '../Date';

const Card = (props) => {
  const { title, short, assigned, color, dueDate, completed } = props;

  const bodyDisplay = short.substr(0, 79) + '&hellip;';

  const initials = assigned.split(' ').map((item, i) => {
      if (i < 2)
        return item[0];
      else
        return '';
    }).join('').toUpperCase();

  return (
    <div className="card">
      <div className="card__header">{title}</div>
      <div className="card__body flex-fill"
        dangerouslySetInnerHTML={{__html: bodyDisplay}}></div>
      <div className="card__footer">
        <div>
          <ColorInitial initials={initials} color={color} />
        </div>
        <div>
          <Date date={dueDate} mute={completed} />
        </div>
      </div>
    </div>
  )
}

export default Card;