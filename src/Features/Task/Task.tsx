import React from 'react'
import {Card,Form} from 'react-bootstrap'
import styles from "./Task.module.css"
import {TaskPropType} from './types'

const Task = ({theme,isChecked,setIscheck,task,onchangestatus}:TaskPropType) => {

  

  return (
    <div >
      <Card className={`${styles.card}  ${theme?`${styles.light}`:`${styles.dark}`}`}>
        <Form.Check
        label={task.title}
        checked={isChecked}
   
        value={task.id}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{onchangestatus(e,task.id);setIscheck((prev)=>!prev)}}
        >
        </Form.Check>
      </Card>
    </div>
  )
}

export default Task
