# Week 5 - Hands-On 1: Environment Setup & First Component

## Cognizant Digital Nurture 5.0 – Deep Skilling Program

### Module
Frontend Development using Angular

---

## Hands-On Objective

The objective of this hands-on is to set up the Angular development environment, create a new Angular application, configure routing, and build the initial application structure using standalone components.

---

## Learning Outcomes

- Install and configure Angular CLI
- Create a new Angular project
- Understand Angular project structure
- Configure application routing
- Generate reusable components
- Build the basic application layout
- Verify application execution using Angular development server

---

## Project Information

**Project Name**

```
student-course-portal
```

**Framework**

```
Angular 19
```

**Language**

```
TypeScript
```

**Package Manager**

```
npm
```

---

## Components Created

```
Header Component
Home Component
Course List Component
Student Profile Component
```

---

## Routing Configuration

| Route | Component |
|--------|-----------|
| `/` | Home Component |
| `/courses` | Course List Component |
| `/profile` | Student Profile Component |

---

## Project Structure

```
student-course-portal
│
├── public
├── src
│   ├── app
│   │   ├── components
│   │   │   └── header
│   │   ├── pages
│   │   │   ├── home
│   │   │   ├── course-list
│   │   │   └── student-profile
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   └── main.ts
│
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── Notes.txt
```

---

## Execution

Install dependencies

```bash
npm install
```

Run the project

```bash
ng serve
```

Open the application

```
http://localhost:4200
```

---

## Expected Output

- Angular application runs successfully.
- Header component is displayed.
- Home page loads as the default route.
- Navigation is configured using Angular Router.

---

## Technologies Used

- Angular 19
- TypeScript
- HTML5
- CSS3
- Angular Router
- Node.js
- npm

---

## Status

**Hands-On 1 Completed Successfully**

---

**Program:** Cognizant Digital Nurture 5.0 – Deep Skilling

**Track:** Java Full Stack Engineer (Frontend - Angular)

**Developed by:** Ashreen Fathima
