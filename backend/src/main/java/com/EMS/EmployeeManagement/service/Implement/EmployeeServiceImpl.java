package com.EMS.EmployeeManagement.service.Implement;

import com.EMS.EmployeeManagement.dto.EmployeeDto;
import com.EMS.EmployeeManagement.exception.ResourceNotException;
import com.EMS.EmployeeManagement.mapper.EmployeeMapper;
import com.EMS.EmployeeManagement.model.Employee;
import com.EMS.EmployeeManagement.repository.EmployeeRepository;
import com.EMS.EmployeeManagement.service.EmployeeService;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
         Employee saveEmployee=employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(saveEmployee);
    }

    
    @Override
    public EmployeeDto getEmployeeById(Long id) {
        
      Employee employee=  employeeRepository.findById(id)
        .orElseThrow(()->new ResourceNotException("not match of$ this given id"+id));
       return EmployeeMapper.mapToEmployeeDto(employee);
    }


    @Override
    public List<EmployeeDto> getAllEmployee() {
      List<Employee> employees= employeeRepository.findAll();
      

        return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
    }


    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
      Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotException("the given id not find the server"));
      employee.setFirstName(employeeDto.getFirstName());
      employee.setLastName(employeeDto.getLastName());
      employee.setEmail(employeeDto.getEmail());
      Employee saveEmployee=employeeRepository.save(employee);


      return EmployeeMapper.mapToEmployeeDto(saveEmployee);
    }


    @Override
    public void deleteEmployee(Long id) {
      Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotException("the given id not find the server"));
      employeeRepository.delete(employee);
    }


 

}
