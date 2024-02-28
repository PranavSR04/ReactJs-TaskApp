import React, { useContext } from "react";
import { useState } from "react";
import { Theme } from "../../Components/ThemeContext/ThemeContext";
import { ThemeContextType } from "../../Components/ThemeContext/types";
import { TaskHandlerPropType } from "./types";
import Task from "./Task";

const TaskHandler = ({ task, onchangestatus }: TaskHandlerPropType) => {
	const { theme } = useContext<ThemeContextType>(Theme);

	const [isChecked, setIscheck] = useState<boolean>(
		task.status === "complete" ? true : false
	);

	return (
		<>
			<Task
				theme={theme}
				isChecked={isChecked}
				setIscheck={setIscheck}
				task={task}
				onchangestatus={onchangestatus}
			/>
		</>
	);
};

export default TaskHandler;
