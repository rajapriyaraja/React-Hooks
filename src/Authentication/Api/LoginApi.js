import axios from "axios";
import { baseurl } from "./baseApi";

const logInApi = '/api/auth/user/login';

export const logInApiMethod = async (payload) => {
    try {
        const response = await axios.post(baseurl + logInApi, payload);
        console.log(response.data);
        return response;
    } catch (err) {
        console.error(err.response);
        return err.response;
    }
};
