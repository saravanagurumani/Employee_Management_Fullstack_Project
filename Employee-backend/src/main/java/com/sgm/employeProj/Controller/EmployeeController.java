package com.sgm.employeProj.Controller;

import com.sgm.employeProj.Model.Employee;
import com.sgm.employeProj.Service.EmployeeServiceImpl;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin ("http://localhost:3000/")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    final EmployeeServiceImpl employeeService;


    public EmployeeController(EmployeeServiceImpl employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/getall")
    ResponseEntity<List<Employee>> getallemployee(){
        List<Employee> getallemp = employeeService.getallemployee();
        return new ResponseEntity<>(getallemp,HttpStatus.OK);
    }

    @PostMapping("/add")
    ResponseEntity<Employee> addemployee(@RequestBody Employee employee){
        Employee saveemployee = employeeService.addemployee(employee);
        return new ResponseEntity<>(saveemployee, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    ResponseEntity<String> deleteemployee(@PathVariable Long id){
        employeeService.deleteemployee(id);
        return new ResponseEntity<>("Employee deleted successfully",HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<Employee> getemployeebyid(@PathVariable Long id){
        Employee getemp = employeeService.getemployeebyid(id);
        return new ResponseEntity<>(getemp,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    ResponseEntity<Employee> updateemployee(@RequestBody Employee employee,@PathVariable Long id){
        Employee updateemp = employeeService.updateemployee(employee,id);
        return new ResponseEntity<>(updateemp,HttpStatus.OK);
    }

}
