package com.employee;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public Employee employee() {
        return new Employee(101, "Ashreen Fathima");
    }

    @Bean
    public EmployeeService employeeService() {
        return new EmployeeService(employee());
    }
}