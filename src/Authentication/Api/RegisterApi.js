import axios from "axios";
import { baseurl } from "./baseApi";

const userRegister = '/api/auth/user/register';

export const userRegisterMethod = async (payload) => {
    try {
        const response = await axios.post(baseurl + userRegister, payload);
        return response;
    } catch (error) {
        console.error(error.response);
        return error.response;
    }
};
