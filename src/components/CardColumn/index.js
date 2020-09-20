import React from 'react';
import Card from '../Card';

const CardColumn = (props) => {
  const { name, tasks, className } = props;
  return (
    <div className={`card__column ${className}`}>
      <div className="column__name">
        {name}
      </div>
      <div className="column__cards">
        {tasks.map((item, i)=>(
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CardColumn;