package com.EMS.EmployeeManagement.repository;

import com.EMS.EmployeeManagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;




public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
