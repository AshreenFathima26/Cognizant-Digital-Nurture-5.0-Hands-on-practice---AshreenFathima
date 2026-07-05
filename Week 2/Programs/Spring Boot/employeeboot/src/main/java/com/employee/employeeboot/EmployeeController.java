package com.employee.employeeboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    @GetMapping("/employee")
    public String getEmployee() {

        return """
                Employee Management System

                Employee ID : 101
                Employee Name : Ashreen
                Department : CSD
                Salary : 45000
                """;
    }
}