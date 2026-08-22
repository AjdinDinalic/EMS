import axios from "axios";

const restApiBaseUrl = 'http://localhost:8080/api/employees'

export const listEmployees = () =>
    axios.get(restApiBaseUrl);

export const addEmployee = (employee) =>
    axios.post(restApiBaseUrl,employee)