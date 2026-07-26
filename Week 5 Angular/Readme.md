# 🚀 Cognizant Digital Nurture 5.0

# Week 5 – Angular Hands-on Practice

## 📖 Overview

This folder contains my complete solutions for **Week 5 – Angular Hands-on Exercises** from the **Cognizant Digital Nurture 5.0 Deep Skilling Program**.

Throughout these hands-on exercises, I developed a complete **Student Course Portal** application by progressively implementing Angular concepts from basic to advanced level. Each hands-on builds upon the previous one, resulting in a fully functional Angular application that demonstrates modern web development practices.

The project includes component-based architecture, routing, forms, dependency injection, HTTP communication, state management using NgRx, and comprehensive unit testing using Jasmine and Karma.

---

# 🎯 Objectives

The primary objectives of this week were to:

- Learn Angular fundamentals and application architecture.
- Build reusable standalone components.
- Implement component communication.
- Work with directives and custom pipes.
- Develop template-driven and reactive forms.
- Implement routing and navigation.
- Consume REST APIs using HttpClient.
- Handle asynchronous operations using RxJS.
- Manage application state using NgRx.
- Write unit tests for Angular components and services.

---

# 📂 Repository Structure

```
Week 5 Angular
│
├── HO1 - Environment Setup & First Component
├── HO2 - Data Binding & Component Communication
├── HO3 - Directives & Pipes
├── HO4 - Template-Driven Forms & Validation
├── HO5 - Reactive Forms
├── HO6 - Services & Dependency Injection
├── HO7 - Angular Routing, Guards & Lazy Loading
├── HO8 - API Integration, RxJS & HTTP Interceptors
├── HO9 - State Management (NgRx)
└── HO10 - Unit Testing Angular Applications
```

---

# 📚 Hands-on Summary

## ✅ HO1 – Environment Setup & First Component

### Topics Covered

- Angular CLI
- Project Creation
- Standalone Components
- Component Generation
- Angular Project Structure

### Implemented

- Student Course Portal
- Header Component
- Home Component
- Course List Component
- Student Profile Component

---

## ✅ HO2 – Data Binding & Component Communication

### Topics Covered

- Interpolation
- Property Binding
- Event Binding
- Two-way Binding
- @Input
- @Output
- EventEmitter
- Lifecycle Hooks

### Implemented

- Dynamic Course Display
- Search Functionality
- Parent–Child Communication
- Course Card Component

---

## ✅ HO3 – Directives & Pipes

### Topics Covered

- Structural Directives
- Attribute Directives
- Custom Pipes
- Data Formatting

### Implemented

- Dynamic Rendering
- Course Status Pipe
- Conditional Styling
- Course Filtering

---

## ✅ HO4 – Template-Driven Forms & Validation

### Topics Covered

- FormsModule
- ngModel
- ngForm
- Built-in Validators
- Form Validation

### Implemented

- Student Enrollment Form
- Validation Messages
- Form Submission
- Reset Functionality

---

## ✅ HO5 – Reactive Forms

### Topics Covered

- ReactiveFormsModule
- FormGroup
- FormBuilder
- Validators
- FormControl

### Implemented

- Reactive Enrollment Form
- Dynamic Validation
- Form State Management

---

## ✅ HO6 – Services & Dependency Injection

### Topics Covered

- Angular Services
- Dependency Injection
- Injectable Services
- Shared Data

### Implemented

- Course Service
- Enrollment Service
- Notification Service
- Loading Service

---

## ✅ HO7 – Angular Routing & Navigation

### Topics Covered

- Angular Router
- Route Parameters
- Query Parameters
- Route Guards
- Lazy Loading
- Navigation

### Implemented

- Course Details Page
- Student Profile Page
- Navigation Menu
- Not Found Page
- Route Protection
- Unsaved Changes Guard

---

## ✅ HO8 – API Integration, RxJS & HTTP Interceptors

### Topics Covered

- HttpClient
- REST APIs
- CRUD Operations
- Observables
- RxJS Operators
- HTTP Interceptors
- JSON Server

### Implemented

- Fetch Courses from API
- Add Course
- Update Course
- Delete Course
- Error Handling
- Authentication Interceptor
- Loading Interceptor
- Global Error Interceptor
- Loading Spinner

---

## ✅ HO9 – State Management (NgRx)

### Topics Covered

- NgRx Store
- Actions
- Reducers
- Selectors
- Effects
- Store DevTools

### Implemented

- Course Store
- Enrollment Store
- State Management
- Redux Pattern
- Effect Handling

---

## ✅ HO10 – Unit Testing Angular Applications

### Topics Covered

- Jasmine
- Karma
- TestBed
- Component Testing
- Service Testing
- HttpClient Testing
- MockStore
- Angular Unit Testing

### Implemented

- Component Tests
- Service Tests
- Pipe Tests
- Guard Tests
- Interceptor Tests
- NgRx Component Testing

### Test Result

```
29 Specs
29 Passed
0 Failed
```

All unit tests execute successfully using **Jasmine** and **Karma**.

---

# 💻 Technologies Used

- Angular 19
- TypeScript
- HTML5
- CSS3
- RxJS
- Angular Router
- Angular Forms
- Angular HttpClient
- JSON Server
- NgRx Store
- Jasmine
- Karma
- Node.js
- npm
- Visual Studio Code

---

# 📌 Features

- Standalone Angular Components
- Component Communication
- Dynamic Data Binding
- Custom Pipes
- Template-Driven Forms
- Reactive Forms
- Routing & Navigation
- Route Guards
- REST API Integration
- CRUD Operations
- HTTP Interceptors
- Loading Spinner
- Error Handling
- State Management using NgRx
- Unit Testing
- Modular Project Structure

---

# ▶️ Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
```

---

## 2. Navigate to the Project

```bash
cd student-course-portal
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start JSON Server

```bash
json-server --watch db.json --port 3000
```

The REST API will be available at:

```
http://localhost:3000
```

---

## 5. Run the Angular Application

```bash
ng serve
```

Open your browser and visit:

```
http://localhost:4200
```

---

## 6. Run Unit Tests

```bash
ng test
```

Expected Output:

```
29 Specs
29 Passed
0 Failed
```

---

## 7. Generate Code Coverage Report

```bash
ng test --code-coverage
```

The generated report will be available in:

```
coverage/
```

---

# 🎓 Learning Outcomes

After completing these hands-on exercises, I gained practical experience in:

- Angular application architecture
- Standalone component development
- Component communication
- Data binding techniques
- Custom directives and pipes
- Form validation
- Dependency injection
- Routing and navigation
- Route guards
- REST API integration
- HTTP interceptors
- Reactive programming with RxJS
- State management using NgRx
- Unit testing using Jasmine and Karma
- Angular best practices
- Modular and scalable application development

---

# 📸 Project Overview

**Student Course Portal** is a web application developed using Angular that allows users to:

- Browse available courses
- Search courses
- View detailed course information
- Enroll in courses
- Manage enrolled courses
- Navigate between application modules
- Perform CRUD operations through REST APIs
- Handle asynchronous operations using RxJS
- Manage application state using NgRx
- Execute comprehensive unit tests

---

# 📝 Conclusion

This project represents the successful completion of all **Week 5 Angular Hands-on Exercises** in the Cognizant Digital Nurture 5.0 Deep Skilling Program.

It demonstrates a complete Angular application developed incrementally while applying industry-standard practices such as component-based architecture, dependency injection, RESTful API integration, state management, and automated unit testing.

---

# 👨‍💻 Author

**Ashreen Fathima A**

B.E. Computer Science and Design

RMK Engineering College

Cognizant Digital Nurture 5.0 – Deep Skilling Program
