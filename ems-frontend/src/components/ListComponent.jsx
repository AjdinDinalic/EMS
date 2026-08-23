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

  function updateEmployee(id){
    navigate(`/edit-employee/${id}`)
  }

  return (
    <div>
        <h1 className='text-center'>Employee List</h1>

        <button type="button" className="btn btn-primary ms-2" onClick={addNewEmployee}>Add Employee</button>

<table className="table table-striped table-hover mx-2">
    <thead>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {employees.map(employee =>
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td><button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button></td>
            </tr>
        )}
    </tbody>
</table>
    </div>
  )
}

export default ListComponent