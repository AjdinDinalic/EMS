package net.javaguides.ems_backend.mapper;

public class EmployeeMapper {
    public static EmpoyeeDto mapToEmployeeDto(Employee employee){
        return new EmpoyeeDto(employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
                );
    }
    public static Employee mapToEmployee (EmployeeDto employeeDto){
        return Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );

    }
}
