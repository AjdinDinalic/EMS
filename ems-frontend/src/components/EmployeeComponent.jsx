import { useEffect, useState } from 'react'
import { addEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'



const EmloyeeComponent = () => {
//Hooks
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [errors, setErrors]=useState({firstName:'',lastName:'',email:''})
    const {id} = useParams()

useEffect(()=>{
  if(id){
    getEmployee(id).then((response)=>{
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setEmail(response.data.email)
    }).catch(error =>{console.log(error)})
  }
},[id])
//End of hooks

//Functions
    function saveEmployee(e){
      e.preventDefault();

        if(validateForm()){
            const employee = {firstName,lastName,email}
            if(id){
                updateEmployee(id,employee).then((response)=>{
                  console.log(response.data)
                  navigate('/employees')
                }).catch(error => {console.error(error)});
                 
            }
          else{
            addEmployee(employee).then((response) => {console.log(response.data)
              navigate('/employees') 
            })
      
          }
        }
    }

function validateForm(){
  let valid=true;
  const errorsCopy={... errors};

if(firstName.trim()){
errorsCopy.firstName = ''
}else{
errorsCopy.firstName = 'First name is required'
valid = false
}
if(lastName.trim()){
errorsCopy.lastName = ''
}else{
errorsCopy.lastName = 'Last name is required'
valid = false
}
if(email.trim()){
errorsCopy.email = ''
}else{
errorsCopy.email = 'Email is required'
valid = false
}
setErrors(errorsCopy)
return valid;
  }

function pageTitle(){
if(id){
  return <h2 className='text-center'>Update Employee</h2>
}else{
  return <h2 className='text-center'>Add Employee</h2>
}
}
//End of functions
  return (
    <div className='container'>
      <br />
  {pageTitle()}
<div className='row'>
    <div className='card col-md-6 offset-md-3'>
    <div className='card-body'>

      <form action="">

      <div className='form-group mb-2'>
        <label className='form-label'>First name:</label>
        <input type="text" name="firstName" id="" placeholder='Enter first name' value={firstName} className={`form-control ${errors.firstName ? 'is-invalid':''} `} onChange={(e)=>setFirstName(e.target.value)}/>
      {errors.firstName && <div className='invalid-feedback'>Invalid first name</div>}
      </div>

      <div className='form-group mb-2'>
        <label className='form-label'>Last name:</label>
        <input type="text" name="lastName" id="" placeholder='Enter last name' value={lastName} className={`form-control ${errors.lastName ? 'is-invalid':''} `} onChange={(e)=>setLastName(e.target.value)}/>
      {errors.firstName && <div className='invalid-feedback'>Invalid last name</div>}
      </div>

      <div className='form-group mb-2'>
        <label className='form-label'>Email:</label>
        <input type="text" name="email" id="" placeholder='Enter email' value={email} className={`form-control ${errors.email ? 'is-invalid':''} `} onChange={(e)=>setEmail(e.target.value)}/>
      {errors.firstName && <div className='invalid-feedback'>Invalid email</div>}
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