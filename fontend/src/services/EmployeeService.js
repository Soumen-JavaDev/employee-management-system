// Example service function (put this in a separate file like EmployeeService.js)
import axios from 'axios'

let BASEURL="http://localhost:8080/api/employee/"




export const getAllEmployees = () => axios.get(BASEURL+"getallEmployee");


export const addEmployee=(employee)=>axios.post(BASEURL+"add-employee",employee);

export const getEmployee=(id)=>axios.get(BASEURL+"getById"+id);

export const updateEmployee=(id,employee)=>axios.put(BASEURL+"update"+id,employee);

export const deleteEmployee=(id)=>axios.delete(BASEURL+"delete"+id);