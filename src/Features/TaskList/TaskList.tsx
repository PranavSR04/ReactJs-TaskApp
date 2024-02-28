
import { Card } from 'react-bootstrap';
import styles from '../Task/Task.module.css'
import { TaskListPropType } from './types';
import TaskHandler from '../Task/TaskHandler';


const TaskList = ({tasks,onchangestatus,theme}:TaskListPropType) => {
  
  return (
    <div>
        <Card className={`${styles.card}  ${theme?`${styles.light}`:`${styles.dark}`}`}>
            {tasks.map((task)=><TaskHandler key={task.id} task={task} onchangestatus={onchangestatus}></TaskHandler>)}
    
        </Card>
      
    </div>
  )
}

export default TaskList
