import Header from './components/Header';
import Content from './components/Content';
import './TaskLogging.css';

interface TaskLoggingProps {}

const TaskLogging: React.FC<TaskLoggingProps> = () => {
  return (
    <div className="notificationsFrame">
      <div className="panel">
        <Header title="Registro de tareas" />
        <Content />

        <Header title="Perfil" />
        <Header title="Preferencias" />
        <Header title="Chat" />
      </div>
    </div>
  );
};

export default TaskLogging;