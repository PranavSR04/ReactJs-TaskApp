import {Pagination} from "react-bootstrap";
import { CustomPaginationProps } from "./types";

const CustomPagination = ({setOffset,limit,offset}:CustomPaginationProps) => {
	return (
		<Pagination>
			<Pagination.Prev
				onClick={() => setOffset((prev) => prev - limit)}
				disabled={offset === limit ? true : false}
			></Pagination.Prev>
			<Pagination.Item active={true}>1</Pagination.Item>
			<Pagination.Next
				onClick={() => setOffset((prev) => prev + limit)}
				disabled={offset === 50 ? true : false}
			></Pagination.Next>
		</Pagination>
	);
};

export default CustomPagination;
