import React, { useEffect, useState } from "react";
import {  deleteEmployee, getAllEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();
  useEffect(() => {
   getAllEmployee();
  }, []);
  function getAllEmployee(){
     getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  let addEmployees = () => {
    navigator("/add-employee");
  };

  function  employeeDelete(id){
     if(id){
      deleteEmployee(id).then((Response)=>{
        
        console.log(Response.data);
        getAllEmployee();
      }).catch(error=>console.log(error));
     }
  }
  function updateEmployee(id){
    navigator(`/edit-employee/${id}`);
  }
  return (
    <div className="container">
      <h2 className="text-center">List of Employee</h2>
      <button className="btn btn-primary mb-2" onClick={addEmployees}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>em id</th>
            <th>em name</th>
            <th>em lname</th>
            <th>em email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td className="d-flex flex-row justify-content-around">
                <button className="btn btn-info" onClick={()=>updateEmployee(emp.id)}>Update</button>
                <button className="btn btn-danger" onClick={()=>employeeDelete(emp.id)}>Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
