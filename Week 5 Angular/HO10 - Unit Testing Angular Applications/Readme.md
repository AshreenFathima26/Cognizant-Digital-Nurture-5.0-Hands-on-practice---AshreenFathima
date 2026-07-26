# 📘 HO10 – Unit Testing Angular Applications

## 📌 Cognizant Digital Nurture 5.0 – Angular Hands-On 10

This project demonstrates **Unit Testing in Angular** using **Jasmine**, **Karma**, **Angular TestBed**, **HttpClient Testing**, and **NgRx MockStore**. The application contains comprehensive unit tests for Angular components, services, pipes, guards, interceptors, and store-connected components.

---

## 🎯 Objectives

- Understand Angular Unit Testing
- Learn Jasmine testing framework
- Configure and use Angular TestBed
- Test Components and Services
- Test `@Input()` and `@Output()` properties
- Test Angular Lifecycle Hooks
- Test HTTP requests using HttpClient Testing
- Test NgRx Store-connected components using MockStore
- Execute and verify all unit tests using Karma

---

# 🛠 Technologies Used

- Angular 19
- TypeScript
- Jasmine
- Karma
- Angular TestBed
- HttpClient Testing
- NgRx Store
- MockStore
- JSON Server

---

# 📂 Project Structure

```
student-course-portal/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── pipes/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── store/
│   │   ├── models/
│   │   ├── app.component.*
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│
├── db.json
├── package.json
├── angular.json
├── tsconfig.json
├── tsconfig.spec.json
└── README.md
```

---

# 📚 Hands-On Tasks Completed

## ✅ Task 1 – Component Testing

Implemented unit tests for:

- CourseCardComponent
- CourseListComponent
- CourseDetailComponent
- HomeComponent
- HeaderComponent
- EnrollmentFormComponent
- StudentProfileComponent
- NotificationComponent
- CoursesLayoutComponent
- ReactiveEnrollmentFormComponent
- AppComponent

Covered:

- Component Creation
- TestBed Configuration
- DOM Rendering
- `@Input()` Testing
- `@Output()` Event Testing
- Lifecycle Hook (`ngOnChanges`) Testing

---

## ✅ Task 2 – Service Testing

Implemented tests for:

- CourseService
- EnrollmentService
- NotificationService
- LoadingService
- AuthService

Covered:

- Dependency Injection
- HttpClient Testing
- Mock HTTP Requests
- Service Creation Tests
- Error Handling Tests

---

## ✅ NgRx Store Testing

Implemented:

- MockStore Configuration
- Initial State Testing
- Store Injection
- Component Testing with MockStore

---

## ✅ Additional Testing

Implemented tests for:

- Route Guard
- HTTP Interceptors
- Custom Pipe

---

# ▶️ How to Run the Project

## Step 1 – Install Dependencies

```bash
npm install
```

---

## Step 2 – Start JSON Server

```bash
json-server --watch db.json --port 3000
```

API will be available at:

```
http://localhost:3000
```

---

## Step 3 – Run Angular Application

```bash
ng serve
```

Application URL:

```
http://localhost:4200
```

---

## Step 4 – Run Unit Tests

```bash
ng test
```

This launches the Karma Test Runner and executes all unit tests.

---

## Step 5 – Generate Code Coverage Report (Optional)

```bash
ng test --code-coverage
```

Coverage report will be generated inside:

```
coverage/
```

Open:

```
coverage/index.html
```

to view the coverage report.

---

# 🧪 Testing Tools Used

- Jasmine
- Karma
- Angular TestBed
- HttpClient Testing
- MockStore
- ComponentFixture
- DebugElement

---

# ✅ Features Tested

✔ Component Creation

✔ DOM Rendering

✔ Property Binding

✔ Event Emission

✔ Lifecycle Hooks

✔ Service Injection

✔ HTTP Requests

✔ Mock HTTP Responses

✔ NgRx Store

✔ Guards

✔ Pipes

✔ Interceptors

---

# 📸 Expected Output

Running:

```bash
ng test
```

produces:

```
29 specs
0 failures
```

All unit tests execute successfully using Karma.

---

# 📖 Learning Outcomes

After completing this hands-on, I gained practical knowledge of:

- Angular Unit Testing
- Jasmine Framework
- Karma Test Runner
- Test-Driven Development Concepts
- Angular TestBed
- Mock HTTP Testing
- NgRx MockStore
- Component Testing
- Service Testing
- Angular Dependency Injection in Tests

---

# 👩‍💻 Developed By

**Ashreen Fathima A**

B.E. Computer Science and Design

RMK Engineering College

---

# 📄 License

This project was developed as part of the **Cognizant Digital Nurture 5.0 Angular Hands-On Program** for learning and educational purposes.
