
import { useContext } from 'react'
import { Theme } from '../../Components/ThemeContext/ThemeContext';
import { ThemeContextType } from '../../Components/ThemeContext/types';
import { TaskListHandlerPropType } from './types';
import TaskList from './TaskList';

const TaskListHandler = ({tasks,onchangestatus}:TaskListHandlerPropType) => {
    const {theme}=useContext<ThemeContextType>(Theme);
  return (
    <>
      <TaskList
      theme={theme}
      tasks={tasks}
      onchangestatus={onchangestatus}

      />
    </>
  )
}

export default TaskListHandler
