import axios from "axios";
import { baseurl } from "./baseApi";

const  delApi='/api/user/deleteUser/'
export const DelUserApi=async(payload,token)=>{
    try{
        const response=await axios.delete(`${baseurl}${delApi}${payload}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }catch(error){
        console.error(error);
    }
}