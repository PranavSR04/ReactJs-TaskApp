
import { TaskPropType } from '../../Task/types';



interface TaskListHandlerPropType {
    tasks: TaskPropType['task'][]; 
    onchangestatus:TaskPropType['onchangestatus'] ;
    
  }

  export type {TaskListHandlerPropType};

  
  interface TaskListPropType {
    tasks: TaskPropType['task'][]; 
    onchangestatus:TaskPropType['onchangestatus'] ;
    theme:boolean;
    
  }

  export type {TaskListPropType};