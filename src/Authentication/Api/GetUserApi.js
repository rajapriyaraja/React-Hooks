import axios from "axios";
import { baseurl } from "./baseApi";

const getApi='/api/user/getUser/';
export const  GetUserApi=async(payload,token) => {
    try{
        const response=await axios.get(`${baseurl}${getApi}${payload}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
       
    }catch(error){
        console.error(error);
    }

}