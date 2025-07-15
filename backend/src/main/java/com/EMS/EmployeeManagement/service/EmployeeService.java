package com.EMS.EmployeeManagement.service;

import java.util.List;

import com.EMS.EmployeeManagement.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long id);

    List<EmployeeDto> getAllEmployee();

    EmployeeDto updateEmployee(Long id,EmployeeDto employeeDto);

    void deleteEmployee(Long id);

    
}
