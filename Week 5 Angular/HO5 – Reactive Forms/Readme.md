# 📝 HO5 – Reactive Forms with FormBuilder, FormArray & Custom Validators

## Cognizant Digital Nurture 5.0 – Java FSE (Angular)

### Student Course Portal – Reactive Enrollment Form

This hands-on demonstrates the implementation of **Reactive Forms** in Angular using **FormBuilder**, **FormGroup**, **FormArray**, built-in validators, custom synchronous validators, asynchronous validators, and dynamic form controls.

The Student Course Portal is enhanced with a professional Reactive Enrollment Form that validates user input, supports dynamic course addition/removal, and demonstrates Angular's reactive approach to form handling.

---

# 📌 Learning Objectives

- Understand Reactive Forms in Angular
- Create forms using FormBuilder
- Implement FormGroup and FormControl
- Apply Built-in Validators
- Create Custom Synchronous Validators
- Implement Asynchronous Validators
- Work with FormArray
- Add Dynamic Form Controls
- Handle Form Submission

---

# 🛠 Technologies Used

- Angular 20
- TypeScript
- HTML5
- CSS3
- Visual Studio Code

---

# 📂 Project Features

### 📋 Student Reactive Enrollment Form

- Student Name
- Student Email
- Course ID
- Preferred Semester
- Terms & Conditions
- Additional Courses (Dynamic)
- Submit
- Reset
- Professional Responsive UI

---

# ✅ Angular Concepts Implemented

### Reactive Forms

- ReactiveFormsModule
- FormBuilder
- FormGroup
- FormControl
- FormArray

### Built-in Validators

- Validators.required
- Validators.minLength
- Validators.email
- Validators.requiredTrue

### Custom Validators

- Custom Synchronous Validator (`noCourseCode`)
- Custom Async Validator (`simulateEmailCheck`)

### Dynamic Controls

- Add Another Course
- Remove Course

---

# ✨ Functionalities

- Reactive Form Creation
- Form Validation
- Required Field Validation
- Email Validation
- Custom Course ID Validation
- Async Email Availability Check
- Dynamic Additional Courses
- Submit Button Enable/Disable
- Success Message after Submission
- Console Logging of Form Values
- Reset Functionality

---

# 📁 Project Structure

```
student-course-portal
│
├── components
│   └── header
│
├── pages
│   ├── home
│   ├── course-list
│   ├── enrollment-form
│   ├── reactive-enrollment-form
│   └── student-profile
│
├── app.routes.ts
├── app.component.ts
└── README.md
```

---

# 📸 Application Pages

- 🏠 Home
- 📚 Courses
- 📝 Template-Driven Enrollment
- ⚡ Reactive Enrollment
- 👤 Student Profile

---

# 🎯 Cognizant Hands-on Concepts Covered

✔ ReactiveFormsModule

✔ FormBuilder

✔ FormGroup

✔ FormControl

✔ FormArray

✔ Built-in Validators

✔ Custom Validator

✔ Async Validator

✔ Dynamic Form Controls

✔ Form Submission

✔ Success Message

✔ Professional Responsive UI

---

# 🧪 Validation Rules

### Student Name

- Required
- Minimum 3 characters

### Student Email

- Required
- Valid Email Format
- Async Validation (Emails containing `test@` are rejected)

### Course ID

- Required
- Course IDs starting with `XX` are not allowed

### Preferred Semester

- Required

### Terms & Conditions

- Must be accepted

### Additional Courses

- Dynamically Add
- Dynamically Remove
- Required Validation

---

# 🚀 Expected Output

- Professional Student Reactive Enrollment Form
- Built-in Validation Messages
- Custom Validation
- Async Email Validation
- Dynamic Course Addition
- Dynamic Course Removal
- Submit Enabled Only When Form Is Valid
- Successful Enrollment Message
- Console Output of Form Values

---

# 📚 Key Angular APIs Used

- ReactiveFormsModule
- FormBuilder
- FormGroup
- FormControl
- FormArray
- Validators
- AbstractControl
- ValidationErrors
- AsyncValidatorFn

---

# 👩‍💻 Developed By

**Ashreen Fathima A**

B.E. Computer Science and Design

RMK Engineering College

Cognizant Digital Nurture 5.0 – Java FSE

2026
