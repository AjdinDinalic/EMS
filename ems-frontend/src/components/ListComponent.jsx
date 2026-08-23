import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const ListComponent = () => {
    
const [employees, setEmployees] = useState([])

useEffect(()=>{
getAllEmployees()
},[])


  const navigate = useNavigate(); 

function getAllEmployees(){
        listEmployees().then((response) =>{
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    })
}

  function addNewEmployee() { 
    navigate('/add-employee'); 
  }

  function updateEmployee(id){
    navigate(`/edit-employee/${id}`)
  }
  function removeEmployee(id){

    deleteEmployee(id).then((response)=>{
getAllEmployees()
    } ).catch(error=>{
        console.error(error)
    })
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
                <td><button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                </td>
            </tr>
        )}
    </tbody>
</table>
    </div>
  )
}

export default ListComponent