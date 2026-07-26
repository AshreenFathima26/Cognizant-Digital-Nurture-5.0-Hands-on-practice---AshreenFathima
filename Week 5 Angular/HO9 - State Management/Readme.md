# 📚 HO9 - State Management using NgRx

> **Cognizant Digital Nurture 5.0 – Angular Deep Skilling**
>
> **Week 5 – Hands-on 9**

---

# 📖 Overview

This hands-on demonstrates **State Management in Angular using NgRx**. The project extends the Student Course Portal application by integrating a centralized store to manage application state using the Redux architecture.

The implementation includes **Actions, Reducers, Selectors, Effects, and Store configuration**, while preserving the functionality developed in previous hands-ons.

---

# 🎯 Objectives

- Understand centralized state management
- Implement Redux architecture using NgRx
- Manage application state with Store
- Create reusable Actions and Reducers
- Use Selectors for efficient state retrieval
- Handle asynchronous API requests using Effects
- Configure Redux DevTools for debugging

---

# 🛠 Technologies Used

- Angular 19
- TypeScript
- NgRx Store
- NgRx Effects
- NgRx Store DevTools
- RxJS
- JSON Server
- Standalone Components

---

# 📂 Project Features

## ✅ Course State Management

Implemented:

- Course Actions
- Course Reducer
- Course Selectors
- Course Effects
- Store Registration

---

## ✅ Enrollment State

Created separate store for:

- Enroll Course
- Unenroll Course
- Enrollment Reducer
- Enrollment Selectors

---

## ✅ Redux Store

Configured using:

- provideStore()
- provideState()
- provideEffects()
- provideStoreDevtools()

---

## ✅ Effects

Implemented asynchronous API handling using:

- createEffect()
- switchMap()
- map()
- catchError()
- ofType()

---

## ✅ Existing Features Preserved

The following features from previous hands-ons continue to work successfully:

- Course Listing
- Search Courses
- Course Details
- Enrollment
- Update Course
- Delete Course
- Routing
- HTTP API Integration
- HTTP Interceptors
- Loading Indicator
- Error Handling

---

# 📁 Folder Structure

```
src
│
├── app
│   ├── store
│   │
│   ├── course
│   │   ├── course.actions.ts
│   │   ├── course.reducer.ts
│   │   ├── course.selectors.ts
│   │   └── course.effects.ts
│   │
│   └── enrollment
│       ├── enrollment.actions.ts
│       ├── enrollment.reducer.ts
│       └── enrollment.selectors.ts
│
├── services
├── components
├── pages
└── models
```

---

# ⚙️ NgRx Components Implemented

## Actions

- Load Courses
- Load Courses Success
- Load Courses Failure
- Enroll Course
- Unenroll Course

---

## Reducers

Implemented reducers to maintain immutable application state.

---

## Selectors

Implemented selectors for:

- Course List
- Loading State
- Error State
- Enrolled Course IDs

---

## Effects

Created Effects to perform asynchronous HTTP requests while keeping reducers pure.

---

# 🔄 Workflow

```
Component
      │
      ▼
Dispatch Action
      │
      ▼
NgRx Effect
      │
HTTP Request
      │
      ▼
Success / Failure Action
      │
      ▼
Reducer
      │
      ▼
Store Updated
      │
      ▼
Selector
      │
      ▼
Component UI Updated
```

---

# 📸 Output

Successfully executed:

- Student Course Portal
- Course Listing
- Search Functionality
- Update & Delete Operations
- Enrollment
- NgRx Store Initialization
- Redux DevTools Configuration

---

# 📚 Concepts Covered

- State Management
- Redux Architecture
- NgRx Store
- Actions
- Reducers
- Selectors
- Effects
- Immutable State
- RxJS Operators
- Async Data Flow
- Standalone Angular Configuration

---

# ✅ Learning Outcome

After completing this hands-on, I gained practical experience in implementing centralized state management using NgRx, managing application state through actions and reducers, handling asynchronous API calls with effects, configuring Redux DevTools, and integrating NgRx into an existing Angular application while preserving previously implemented functionality.

---

# 👩‍💻 Developed By

**Ashreen Fathima**

B.E. Computer Science and Design

RMK Engineering College

Cognizant Digital Nurture 5.0 – Angular Deep Skilling
