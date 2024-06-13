import { CREATE_TODO, UPDATE_TODO, FETCH_TODO, FETCH_ID_TODO, DELETE_TODO } from "./ReducerType"

export const postodo = (data)=>{
    return{
    type : CREATE_TODO,
    payload: data
};
}
export const fetchtodo = (data)=>{
    return{
    type : FETCH_TODO,
    payload:data

};
}
export const fetchIdtodo = (data)=>{
    return{
    type : FETCH_ID_TODO,
    payload: data

};
}
export const updatetodo= (data)=>{
    return{
    type : UPDATE_TODO,
    payload: data

};
}
export const deletetodo= (id)=>{
    return{
    type : DELETE_TODO,
    payload: id

}}