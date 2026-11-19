
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

interface TaskLoggingProps {}

const TaskLogging: React.FC<TaskLoggingProps> = () => {
  return (
    <div className="notificationsFrame">
      <div className="panel">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default TaskLogging;
