import axios, { AxiosError } from 'axios';
import { userDetailsType } from '../../../Features/Login/types';

export const postLogin = async ({ email, password }: userDetailsType): Promise<{message:string} | AxiosError> => {
    return await axios.post("https://70177bb6-8add-4b44-8c70-eee58a7e6f24.mock.pstmn.io/login", { email, password })
        .then(data => data.data)
};
