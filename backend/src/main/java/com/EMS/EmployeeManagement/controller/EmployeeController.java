package com.EMS.EmployeeManagement.controller;

import com.EMS.EmployeeManagement.dto.EmployeeDto;
import com.EMS.EmployeeManagement.service.EmployeeService;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // build add Employee Rest API
    @PostMapping("/add-employee")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto saveEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(saveEmployee, HttpStatus.CREATED);
    }

    // build get API
    @GetMapping("/getById{id}")
    public ResponseEntity<EmployeeDto> getEmployees(@PathVariable("id") Long id) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(id);

        return ResponseEntity.ok(employeeDto);
    }

    // build get all empolyee
    @GetMapping("/getallEmployee")
    public ResponseEntity<List<EmployeeDto>> getAllEmployee() {
        List<EmployeeDto> employees = employeeService.getAllEmployee();
        return ResponseEntity.ok(employees);
    }

    // build update employee

    @PutMapping("/update{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long id,
            @RequestBody EmployeeDto employeeDto) {
        EmployeeDto employeeDto2 = employeeService.updateEmployee(id, employeeDto);

        return ResponseEntity.ok(employeeDto2);
    }

    //build delete API
    @DeleteMapping("/delete{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);

        return ResponseEntity.ok("the employee delete sucssesfully");
    }

}
