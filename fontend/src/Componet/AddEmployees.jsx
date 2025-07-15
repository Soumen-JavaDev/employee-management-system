import React, { useState, useEffect } from "react";
import { addEmployee, getEmployee, updateEmployee} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployees = () => {
  const [firstName, firstNameFun] = useState("");
  const [lastName, lastNameFun] = useState("");
  const [email, emailFun] = useState("");
  let { id } = useParams();

  let navigator = useNavigate();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };
     
    if(id){
      updateEmployee(id,employee).then((Response)=>{
        console.log(Response.data);
        navigator("/");
      }).catch(error=>console.error(error));
    }else{
    addEmployee(employee).then((Response) => {
      console.log(Response.data);
      navigator("/");
    })};
  };

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((Response) => {
          firstNameFun(Response.data.firstName);
          lastNameFun(Response.data.lastName);
          emailFun(Response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function pageTitle() {
    if (id) {
      return <h1 className="text-center">Update Employee</h1>;
    }
    return <h1 className="text-center">Add Employee</h1>;
  }

  return (
    <>
      <form className="container">
        {pageTitle()}
        <div className="form-group ">
          <label htmlFor="disabledTextInput">First Name</label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder="Enter Employee First Name"
            value={firstName}
            onChange={(e) => firstNameFun(e.target.value)}
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="disabledTextInput">Last Name</label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder="Enter Employee Last Name"
            value={lastName}
            onChange={(e) => lastNameFun(e.target.value)}
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="disabledTextInput">Email ID</label>
          <input
            type="email"
            id="disabledTextInput"
            className="form-control"
            placeholder="Enter Email id"
            value={email}
            onChange={(e) => emailFun(e.target.value)}
          ></input>
        </div>
        <br></br>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={saveOrUpdateEmployee}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddEmployees;
