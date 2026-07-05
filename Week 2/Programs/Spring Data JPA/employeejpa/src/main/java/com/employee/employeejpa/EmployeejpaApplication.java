package com.employee.employeejpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeejpaApplication implements CommandLineRunner {

    @Autowired
    private EmployeeRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(EmployeejpaApplication.class, args);
    }

    @Override
    public void run(String... args) {

        repository.save(new Employee(101, "Ashreen", 45000));
        repository.save(new Employee(102, "Rahul", 52000));
        repository.save(new Employee(103, "Priya", 60000));

        System.out.println("Employee Records:");

        repository.findAll().forEach(employee ->
                System.out.println(
                        employee.getId() + " "
                                + employee.getName() + " "
                                + employee.getSalary()
                )
        );
    }
}
