import axios from "axios";

const restApiBaseUrl = 'http://localhost:8080/api/employees'

export const listEmployees = () =>
    axios.get(restApiBaseUrl);

export const addEmployee = (employee) =>
    axios.post(restApiBaseUrl,employee)

export const getEmployee = (employeeId) =>
    axios.get(restApiBaseUrl+'/'+employeeId)

export const updateEmployee = (employeeId,employee)=>
    axios.put(restApiBaseUrl+'/'+ employeeId,employee)

export const deleteEmployee = (employeeId) => 
    axios.delete(restApiBaseUrl+'/'+employeeId)