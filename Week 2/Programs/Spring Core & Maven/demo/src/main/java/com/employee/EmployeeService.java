package com.employee;

public class EmployeeService {

    private Employee employee;

    public EmployeeService(Employee employee) {
        this.employee = employee;
    }

    public void showEmployee() {
        employee.display();
    }
}
