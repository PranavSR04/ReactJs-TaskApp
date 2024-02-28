import { TaskType } from "../../Task/types";


export interface MainPropType {
    completeCount:number|undefined;
	incompleteCount:number|undefined;
    offset:number;
	filterfunction:(e: React.ChangeEvent<HTMLSelectElement>) => void;
	formonsubmit:(e: React.FormEvent<HTMLFormElement>) => void;
	isLoading:boolean;
	isError:boolean;
    tasks:TaskType[];
	filteredtasks:TaskType[] | undefined;
	onchangestatus:(e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
	limit:number;
	setOffset:React.Dispatch<React.SetStateAction<number>>;
	setSearch:React.Dispatch<React.SetStateAction<string>>;
}
