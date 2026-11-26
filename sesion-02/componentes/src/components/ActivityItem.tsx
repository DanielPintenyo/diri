import React from 'react';

interface ActivityItemProps {
  valorAlt: string;
  time: string;
  description: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  valorAlt,
  time,
  description
}) => {
  return (
    <div className="item">
      <div className="avatar">
        <img
          alt={valorAlt}
          src={`/images/${valorAlt.toLowerCase()}.jpg`}
        />
      </div>

      <span className="time">{time}</span>

      <p>{description}</p>
    </div>
  );
};

export default ActivityItem;
