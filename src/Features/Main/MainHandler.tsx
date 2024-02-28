import React from "react";
import Main from "./Main";
import "../../App.css";
import { useState } from "react";
import { useEffect } from "react";
import { fetchtasks } from "./api/getTasks";
import { AxiosError } from "axios";

import { TaskType } from "../Task/types";

export type FilterOptionsType = "All" | "complete" | "incomplete";
export type newFormDatatype = Partial<TaskType>;

const MainHandler = () => {
	const limit: number = 10;
	const [offset, setOffset] = useState<number>(limit);
	const [tasks, setTasks] = useState<TaskType[] | []>([]);
	const [filteredtasks, setFilteredtasks] = useState<undefined | TaskType[]>();
	const [completeCount, setComplete] = useState<undefined | number>();
	const [incompleteCount, setIncomplete] = useState<undefined | number>();
	const [state, setState] = useState<FilterOptionsType>("All");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);
	const [Error, setError] = useState<string>("");
	// let filtered:TaskListPropType['tasks'][] = [];
    const [search,setSearch]=useState<string>("")

	const filterfunction = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		e.preventDefault();
		if (e.target.value !== "all") {
			let filtered = tasks.filter((task) => task.status === e.target.value);
			setFilteredtasks(filtered);
			setState(e.target.value as FilterOptionsType);
		} else {
			setFilteredtasks(undefined);
		}
	};

	const formonsubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData.get("status"));
		let newData: TaskType = { id: 0, title: "", status: "incomplete" };
		for (let [key, value] of formData) {
			if (key === "id") {
				newData[key] = parseInt(value as string);
			} else if (key === "title") {
				newData[key] = value as string;
			} else if (key === "status") {
				newData[key] = value as "complete" | "incomplete";
			}
		}
		if (
			formData.get("status") !== "complete" &&
			formData.get("status") !== "incomplete"
		) {
			alert("Invalid Status");
		}
		setTasks((prev) => {
			let id = prev[prev.length - 1]?.id ?? 0;
			console.log(id);
			newData.id = id + 1;
			console.log(newData);
			return [...prev, newData];
		});
		console.log(tasks);
	};

	const onchangestatus = (
		e: React.ChangeEvent<HTMLInputElement>,
		id: number
	): void => {
		setTasks((prev: TaskType[]) => {
			let changed: TaskType[] = prev.filter((task) => task.id === id);
			let index = changed.length && prev.length && prev?.indexOf(changed[0]);

			//   console.log(changed[0].status);
			changed[0].status = e.target.checked ? "complete" : "incomplete";
			//   console.log(changed[0].status);
			prev.splice(index, 1, changed[0]);
			return [...prev];
		});
	};

	useEffect(() => {
		console.log("mounted");
		filteredtasks &&
			setFilteredtasks((prev) => prev?.filter((task) => task.status === state));
		setComplete(tasks.filter((task) => task.status === "complete").length);
		setIncomplete(tasks.filter((task) => task.status === "incomplete").length);

		let filteredTasksIncluded = tasks.filter(
			(task) => task.status === "complete" || task.status === "incomplete"
		);

		if (
			!tasks.filter(
				(task) => task.status === "complete" || task.status === "incomplete"
			)
		) {
			setTasks(filteredTasksIncluded);
		}

		console.log(
			tasks.filter(
				(task) => task.status !== "complete" && task.status !== "incomplete"
			)
		);

		return () => {
			console.log("Unmounted");
		};
	}, [tasks]);

	useEffect(() => {
		let filteredTasksIncluded = tasks.filter(
			(task) => task.status === "complete" || task.status === "incomplete"
		);
		if (
			tasks.some(
				(task) => task.status !== "complete" && task.status !== "incomplete"
			)
		) {
			setTasks(filteredTasksIncluded);
		}
	}, [tasks]);

	useEffect(() => {
		let responses;
		(async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				setError("");
				responses = await fetchtasks(offset,search);
				console.log(responses instanceof AxiosError);
				if (responses instanceof AxiosError) {
					throw responses;
				} else {
					setTasks(responses);
				}

				// setIsLoading(false);
			} catch (error: unknown) {
				console.log(error);
				setIsError(true);
				setError((error as string).toString());
			} finally {
				setIsLoading(false);
			}
		})();
	}, [offset,search]);

	return (
		<>
			<Main 
        
            formonsubmit={formonsubmit}
            filterfunction={filterfunction}
            completeCount={completeCount}
            incompleteCount={incompleteCount}
            isLoading={isLoading}
            isError={isError}
            onchangestatus={onchangestatus}
            setOffset={setOffset}
            limit={limit}
            tasks={tasks}
            offset={offset}
            filteredtasks={filteredtasks}
            setSearch={setSearch}


            />
		</>
	);
};

export default MainHandler;
