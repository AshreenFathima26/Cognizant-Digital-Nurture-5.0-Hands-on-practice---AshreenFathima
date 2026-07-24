# Week 6 – Angular Dependency Injection (HO6)

## 📌 Overview

This project is part of the **Cognizant Digital Nurture 5.0 – Full Stack Engineer (Java FSE)** learning program.

Week 6 focuses on implementing **Angular Dependency Injection (DI)** using services, hierarchical dependency injection, and component-level providers within the **Student Course Portal** application.

---

## 🎯 Learning Objectives

- Understand Angular Dependency Injection
- Create and inject services
- Share data between components using services
- Perform Service-to-Service Injection
- Implement Hierarchical Dependency Injection
- Use Component-Level Providers
- Build reusable and maintainable Angular applications

---

## 🛠 Technologies Used

- Angular 20
- TypeScript
- HTML5
- CSS3
- Angular Dependency Injection
- Angular Services
- Standalone Components

---

# Hands-On Tasks Completed

## ✅ Task 1 – Course Service

Implemented a centralized Course Service to manage course data.

### Features

- Created Course model
- Added course dataset
- getCourses()
- getCourseById()
- addCourse()

---

## ✅ Task 2 – Enrollment Service

Implemented EnrollmentService for managing student enrollments.

### Features

- Enroll into course
- Unenroll from course
- Check enrollment status
- Retrieve enrolled courses
- Service-to-Service Injection using CourseService

---

## ✅ Task 3 – Course Summary Widget

Created a reusable dashboard widget.

Displays:

- Total Available Courses

Uses:

- CourseService

---

## ✅ Task 4 – Student Profile

Developed a Student Profile dashboard.

Displays

- Student Information
- CGPA
- Semester
- Total Enrolled Courses
- Dynamic Enrolled Course List

---

## ✅ Task 5 – Notification Component

Implemented Hierarchical Dependency Injection.

Features

- NotificationService
- Component-level Provider
- Welcome Notification

---

# Project Structure

```
src/
│
├── models/
│     └── course.model.ts
│
├── services/
│     ├── course.service.ts
│     ├── enrollment.service.ts
│     └── notification.service.ts
│
├── components/
│     ├── course-card/
│     ├── course-summary-widget/
│     └── notification/
│
├── pages/
│     ├── home/
│     ├── course-list/
│     └── student-profile/
│
└── pipes/
      └── course-status.pipe.ts
```

---

# Dependency Injection Implemented

## Root-Level Services

- CourseService
- EnrollmentService

These services are shared across the entire application.

---

## Component-Level Provider

NotificationComponent creates its own instance of NotificationService using:

```typescript
providers: [NotificationService]
```

This demonstrates **Hierarchical Dependency Injection**.

---

# Key Angular Concepts Covered

- Dependency Injection
- Injectable Services
- Root Provider
- Component Provider
- Service-to-Service Injection
- Hierarchical DI
- Standalone Components
- Data Sharing
- Component Communication
- Reusable Services

---

# Application Features

- Browse available courses
- Search courses
- Enroll / Unenroll
- View enrolled courses
- Dynamic course summary
- Student profile dashboard
- Notification system

---

# Screens Implemented

- Home
- Courses
- Student Profile
- Course Summary Widget
- Notification Component

---

# Learning Outcome

Successfully implemented Angular Dependency Injection concepts by creating reusable services, sharing application data, managing course enrollments, and demonstrating hierarchical dependency injection using component-level providers.

---

# Author

**Ashreen Fathima**

B.E. Computer Science and Design

RMK Engineering College

Cognizant Digital Nurture 5.0 – Java Full Stack Engineer

2026
