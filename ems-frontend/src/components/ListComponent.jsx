import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const ListComponent = () => {
    
const [employees, setEmployees] = useState([])

useEffect(()=>{
    listEmployees().then((response) =>{
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    })
},[])


  const navigate = useNavigate(); 

  function addNewEmployee() { 
    navigate('/add-employee'); 
  }

  return (
    <div>
        <h1 className='text-center'>Employee List</h1>

        <button type="button" className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>

<table className="table table-striped table-hover">
    <thead>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {employees.map(employee =>
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
            </tr>
        )}
    </tbody>
</table>
    </div>
  )
}

export default ListComponent