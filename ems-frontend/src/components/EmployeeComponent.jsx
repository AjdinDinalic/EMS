import { useState } from 'react'
import { addEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const EmloyeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    function saveEmployee(e){
      e.preventDefault();
      const employee = {firstName,lastName,email}
      
      addEmployee(employee).then((response) => {console.log(response.data)})
      navigate('/employees')
    }

  return (
    <div className='container'>
      <br />
<h2 className='text-center'>Add Employee</h2>
<div className='row'>
    <div className='card col-md-6 offset-md-3'>
    <div className='card-body'>

      <form action="">

      <div className='form-group mb-2'>
        <label className='form-label'>First name:</label>
        <input type="text" name="firstName" id="" placeholder='Enter first name' value={firstName} className='form-control' onChange={(e)=>setFirstName(e.target.value)}/>
      </div>

      <div className='form-group mb-2'>
        <label className='form-label'>Last name:</label>
        <input type="text" name="lastName" id="" placeholder='Enter last name' value={lastName} className='form-control' onChange={(e)=>setLastName(e.target.value)}/>
      </div>

      <div className='form-group mb-2'>
        <label className='form-label'>Email:</label>
        <input type="text" name="email" id="" placeholder='Enter email' value={email} className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

      </form>

    </div>
    </div>
</div>

    </div>
  )
}

export default EmloyeeComponent