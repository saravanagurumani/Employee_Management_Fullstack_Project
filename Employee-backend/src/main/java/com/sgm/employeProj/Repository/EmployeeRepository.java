package com.sgm.employeProj.Repository;

import com.sgm.employeProj.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
