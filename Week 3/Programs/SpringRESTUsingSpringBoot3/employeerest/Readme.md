# 🚀 Employee Management REST API using Spring Boot 3 & MySQL

> **Cognizant Digital Nurture 5.0 – Deep Skilling Program**
>
> Week 3 Hands-on Practice

---

# 📌 Project Overview

This project demonstrates the development of a RESTful Employee Management System using **Spring Boot 3**, **Spring Data JPA**, **Hibernate**, and **MySQL**.

The application follows a layered architecture consisting of:

- Controller Layer
- Service Layer
- Repository Layer
- Entity Layer
- MySQL Database

It exposes REST APIs for performing CRUD (Create, Read, Update and Delete) operations on Employee records.

---

# 🎯 Learning Objectives

During this project, I learned:

- Spring Boot Project Structure
- Maven Dependency Management
- REST API Development
- Spring Data JPA
- Hibernate ORM
- MySQL Integration
- CRUD Operations
- Repository Pattern
- Layered Architecture
- API Testing using Postman
- JSON Data Exchange

---

# 🛠 Tech Stack

| Technology | Version |
|------------|----------|
| Java | 21+ |
| Spring Boot | 3.x |
| Maven | Latest |
| Spring Data JPA | ✔ |
| Hibernate | ORM |
| MySQL | 8.x |
| Postman | API Testing |
| VS Code | IDE |

---

# 📂 Project Structure

```
employeerest
│
├── src
│   ├── main
│   │
│   ├── java
│   │     └── com.employee.employeerest
│   │
│   │          ├── controller
│   │          │      EmployeeController.java
│   │          │
│   │          ├── service
│   │          │      EmployeeService.java
│   │          │
│   │          ├── repository
│   │          │      EmployeeRepository.java
│   │          │
│   │          ├── model
│   │          │      Employee.java
│   │          │
│   │          └── EmployeerestApplication.java
│   │
│   └── resources
│           application.properties
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

---

# 🗄 Database

Database Name

```
employee_db
```

Table

```
employee
```

---

# 🧩 Employee Entity

| Field | Type |
|--------|------|
| id | Integer |
| name | String |
| department | String |
| salary | Double |

---

# 🏗 Architecture

```
                Client
                   │
      Browser / Postman
                   │
        EmployeeController
                   │
         EmployeeService
                   │
      EmployeeRepository
                   │
          Spring Data JPA
                   │
             Hibernate ORM
                   │
               MySQL
```

---

# 🔥 REST API Endpoints

## Get All Employees

```
GET /employees
```

---

## Get Employee By ID

```
GET /employees/{id}
```

Example

```
GET /employees/101
```

---

## Create Employee

```
POST /employees
```

Sample JSON

```json
{
  "id":104,
  "name":"Naveen",
  "department":"AI",
  "salary":70000
}
```

---

## Update Employee

```
PUT /employees
```

Sample JSON

```json
{
  "id":104,
  "name":"Naveen",
  "department":"Machine Learning",
  "salary":90000
}
```

---

## Delete Employee

```
DELETE /employees/{id}
```

Example

```
DELETE /employees/103
```

---

# 🧪 API Testing

The APIs were successfully tested using **Postman**.

The following operations were verified:

- GET
- GET by ID
- POST
- PUT
- DELETE

---

# 📸 Output

### Browser

```
http://localhost:8080/employees
```

Output

```json
[
  {
    "id":101,
    "name":"Ashreen",
    "department":"Developer",
    "salary":55000
  },
  {
    "id":102,
    "name":"Rahul",
    "department":"Tester",
    "salary":45000
  },
  {
    "id":104,
    "name":"Naveen",
    "department":"Machine Learning",
    "salary":90000
  }
]
```

---

# ⚙ How to Run

Clone the repository

```
git clone <repository-url>
```

Move into project

```
cd employeerest
```

Configure database

```
application.properties
```

Run

```
mvn spring-boot:run
```

Open

```
http://localhost:8080/employees
```

---

# 📚 Key Concepts Practiced

- RESTful Web Services
- Spring Boot Framework
- Spring MVC
- Dependency Injection
- Spring Data JPA
- Hibernate ORM
- MySQL Database Connectivity
- CRUD Operations
- Maven Build Tool
- JSON Request & Response
- Repository Pattern
- Layered Architecture

---

# 🎓 Cognizant Digital Nurture 5.0

This project was developed as part of the **Cognizant Digital Nurture 5.0 – Deep Skilling Program** to gain hands-on experience in developing enterprise-level RESTful applications using Spring Boot and MySQL.

---

# 👩‍💻 Author

**Ashreen Fathima**

B.E. Computer Science and Design

RMK Engineering College

GitHub:
https://github.com/AshreenFathima26

---

⭐ If you found this project useful, consider giving it a Star!
