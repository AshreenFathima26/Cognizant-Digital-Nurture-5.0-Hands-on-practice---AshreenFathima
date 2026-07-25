# 🚀 Student Course Portal
### Cognizant Digital Nurture 5.0 – Week 5 Hands-On 8
### HTTP Client, RxJS Observables & HTTP Interceptors (Angular 20)

![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![RxJS](https://img.shields.io/badge/RxJS-7-purple?logo=reactivex)
![JSON Server](https://img.shields.io/badge/JSON--Server-Backend-green)
![Status](https://img.shields.io/badge/Status-Completed-success)

---

## 📌 Project Overview

This project was developed as part of the **Cognizant Digital Nurture 5.0 – Angular Hands-On 8**.

The application demonstrates real-world API integration using Angular's **HttpClient**, **RxJS Observables**, and **HTTP Interceptors** by replacing hardcoded data with a mock REST API powered by JSON Server.

---

# ✨ Features

### 📚 Course Management

- View all available courses
- Search courses
- View course details
- Create new courses
- Update existing courses
- Delete courses

---

### 🌐 HTTP Client Integration

- GET Request
- POST Request
- PUT Request
- DELETE Request

Data is fetched dynamically from **JSON Server** instead of hardcoded arrays.

---

### 🔄 RxJS Operators

Implemented the following RxJS operators:

- map()
- tap()
- catchError()
- retry()
- switchMap()

Used for:

- Data transformation
- Logging
- Error handling
- Retry strategy
- Chained API requests

---

### 🛡 HTTP Interceptors

Implemented three interceptors:

### ✅ Authentication Interceptor

Automatically adds:

```
Authorization: Bearer mock-token-12345
```

to every outgoing HTTP request.

---

### ✅ Error Handler Interceptor

Provides global error handling.

Handles:

- 401 Unauthorized
- 500 Internal Server Error

---

### ✅ Loading Interceptor

Displays a global loading indicator while HTTP requests are in progress.

Uses:

- BehaviorSubject
- finalize()
- async pipe

---

## ⚙ Technologies Used

- Angular 20
- TypeScript
- RxJS
- JSON Server
- Angular Standalone Components
- Angular Router
- Angular HttpClient

---

# 📁 Project Structure

```
src/
│
├── components/
│   ├── course-card/
│   ├── course-list/
│   ├── enrollment-form/
│   ├── profile/
│   └── header/
│
├── services/
│   ├── course.service.ts
│   ├── enrollment.service.ts
│   └── loading.service.ts
│
├── interceptors/
│   ├── auth.interceptor.ts
│   ├── error-handler.interceptor.ts
│   └── loading.interceptor.ts
│
├── models/
│
├── app.config.ts
└── app.routes.ts
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/student-course-portal.git
```

Move into the project

```bash
cd student-course-portal
```

Install dependencies

```bash
npm install
```

---

# ▶ Run Angular Application

```bash
ng serve
```

Open

```
http://localhost:4200
```

---

# ▶ Run JSON Server

Install JSON Server

```bash
npm install -g json-server
```

Start the mock backend

```bash
json-server --watch db.json --port 3000
```

API Endpoints

```
http://localhost:3000/courses

http://localhost:3000/students

http://localhost:3000/enrollments
```

---

# 🧪 Testing the Application

### GET

Loads all courses from JSON Server.

---

### POST

Creates a new course.

---

### PUT

Updates an existing course.

---

### DELETE

Deletes a course from the database.

---

### Authorization Header

Verify using:

Chrome DevTools

```
Network
→ Request Headers
→ Authorization
```

```
Bearer mock-token-12345
```

---

### Loading Spinner

A global loading indicator appears during every HTTP request.

---

### Error Handling

Stopping JSON Server displays the configured error message using RxJS catchError and HTTP Interceptors.

---

# 📸 Expected Output

✔ Course list loaded from API

✔ Create Course

✔ Update Course

✔ Delete Course

✔ Authorization Header

✔ Loading Indicator

✔ Global Error Handling

---

# 🎯 Learning Outcomes

After completing this hands-on, I gained practical experience with:

- Angular HttpClient
- REST API Integration
- CRUD Operations
- JSON Server
- RxJS Observables
- RxJS Operators
- Error Handling
- Retry Strategies
- switchMap
- HTTP Interceptors
- Authentication Headers
- Loading Indicators
- Standalone Angular Applications

---

# 📖 Hands-On Details

**Program:** Cognizant Digital Nurture 5.0

**Week:** 5

**Hands-On:** 8 (Advanced)

**Topic:**

HTTP Client — API Integration, Observables & HTTP Interceptors

---

# 👩‍💻 Author

**Ashreen Fathima**

B.E. Computer Science and Design

RMK Engineering College

---

## ⭐ If you found this project helpful, consider giving it a star!
