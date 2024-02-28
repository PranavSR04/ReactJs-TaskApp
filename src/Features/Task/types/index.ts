interface TaskHandlerPropType{
    task:TaskType;
    onchangestatus:(e:React.ChangeEvent<HTMLInputElement>,id:number)=>void
  }
export type {TaskHandlerPropType};  

export interface TaskType{
  id:number;
      status:"complete"|"incomplete";
      title:string;

}

export interface TaskPropType{
  theme:boolean;
  isChecked:boolean;
  setIscheck: React.Dispatch<React.SetStateAction<boolean>>
  task:TaskType;
  onchangestatus:TaskHandlerPropType["onchangestatus"];
}