package com.employeesonar.employeemanagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.employeesonar.employeemanagement.model.Employee;

@Service
public class EmployeeService {

    public List<Employee> getEmployees() {

        List<Employee> employees = new ArrayList<>();

        employees.add(new Employee(101, "Ashreen", "Development", 60000));
        employees.add(new Employee(102, "Naveen", "Testing", 55000));
        employees.add(new Employee(103, "Priya", "HR", 50000));

        return employees;
    }

}
