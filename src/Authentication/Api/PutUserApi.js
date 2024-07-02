import axios from "axios";
import { baseurl } from "./baseApi";

const putApi='/api/user/update';
export const  PutUserApi=async(payload,token) => {
    try{
        const response=await axios.put(`${baseurl}${putApi}${payload}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }catch(error){
        console.error(error);
    }
}