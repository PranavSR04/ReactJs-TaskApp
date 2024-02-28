
import axios, { AxiosError } from "axios";
import { TaskType } from "../../Task/types";

export const fetchtasks = async (offset:number,search:string):Promise<TaskType[] | AxiosError> => {
    return await axios
        .get(
            `https://eac38df4-1ee7-4cf0-927d-dd29c7a06b92.mock.pstmn.io/task?offset=${offset} ${search?`&search=${search}`:""}`
        )
        .then((res) => res.data)
        .catch((err) => err);
};

