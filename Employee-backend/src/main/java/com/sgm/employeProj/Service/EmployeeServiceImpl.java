package com.sgm.employeProj.Service;

import com.sgm.employeProj.Exceptions.EmployeeNotFoundException;
import com.sgm.employeProj.Model.Employee;
import com.sgm.employeProj.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> getallemployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getemployeebyid(Long id) {
        return employeeRepository.findById(id).
                orElseThrow(()-> new EmployeeNotFoundException("Employee with id " + id  + " Does not found"));
    }

    @Override
    public Employee addemployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee updateemployee(Employee employee,Long id) {
        return employeeRepository.findById(id)
                .map(empl -> {
                    empl.setFirstname(employee.getFirstname());
                    empl.setLastname(employee.getLastname());
                    empl.setEmail(employee.getEmail());
                    empl.setDepartment(employee.getDepartment());
                    empl.setEmploymentType(employee.getEmploymentType());
                    return employeeRepository.save(empl);
                }).orElseThrow(()-> new EmployeeNotFoundException("Employee with id " + id + " Does not found"));
    }

    @Override
    public void deleteemployee(Long id) {
        if(!employeeRepository.existsById(id)){
            throw new EmployeeNotFoundException("Employee with ID " + id + " Does not found.");
        }
        employeeRepository.deleteById(id);
    }
}
