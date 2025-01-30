package com.sgm.employeProj.Service;

import com.sgm.employeProj.Model.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getallemployee();
    Employee getemployeebyid(Long id);
    Employee addemployee(Employee employee);
    Employee updateemployee(Employee employee,Long id);
    void deleteemployee(Long id);
}
