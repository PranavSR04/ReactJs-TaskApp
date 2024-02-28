
import "../../App.css";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import TaskListHandler from "../TaskList/TaskListHandler";
import { MainPropType } from "./types";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import CustomSearch from "../../Components/Search/CustomSearch";


const Main = ({
	completeCount,
	incompleteCount,
	filterfunction,
	formonsubmit,
	isLoading,
	isError,
	filteredtasks,
	onchangestatus,
	limit,
	setOffset,
	tasks,
	offset,
	setSearch,

}:MainPropType) => {

	return (
		<div>
			<NavBar/>
			<Card className="main mx-5 px-5">
				<Card.Title>
					<p>Completed : {completeCount && completeCount}</p>
					<p>Incomplete :{incompleteCount && incompleteCount} </p>
					<select
						onChange={(e) => {
							filterfunction(e);
						}}
					>
						<option value={"all"}>All</option>
						<option value={"complete"}>Complete</option>
						<option value={"incomplete"}>Incomplete</option>
					</select>
					<CustomSearch setSearch={setSearch}/>
				</Card.Title>
				<Form
					onSubmit={(e) => {
						formonsubmit(e);
					}}
				>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="title"
						name="title"
					></Form.Control>
					<Form.Label>Status</Form.Label>
					<Form.Control
						type="text"
						placeholder="complete/incomplete"
						name="status"
					></Form.Control>
					<Button type="submit" className="">
						Add
					</Button>
				</Form>
				<Card.Body>
					{isLoading ? (
						<Spinner></Spinner>
					) : isError ? (
						<>{Error}</>
					) : filteredtasks ? (
						<TaskListHandler tasks={filteredtasks} onchangestatus={onchangestatus} />
					) : (
						<TaskListHandler tasks={tasks} onchangestatus={onchangestatus} />
					)}
				</Card.Body>

				<Card.Footer>
					{/* <Pagination>
						<Pagination.Prev onClick={()=>setOffset((prev)=>prev-limit)}
						disabled={offset===limit?true:false}
						
						></Pagination.Prev>
						<Pagination.Item active={true}>1</Pagination.Item>
						<Pagination.Next onClick={()=>setOffset((prev)=>prev+limit)}
						disabled={offset===50?true:false}
						></Pagination.Next>

					</Pagination> */}
					<CustomPagination 
					setOffset={setOffset} 
					offset={offset}
					limit={limit}
					/>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default Main;
