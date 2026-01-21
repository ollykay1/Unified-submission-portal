Unified Submission Portal – Project Overview

Unified Submission Portal is a secure, professional system for students and lecturers to submit, manage, and grade assignments. It is designed for scalability, supporting thousands of students while enforcing role-based access, file integrity, and smooth user experience.



Key Features

Role-based preloader: Student or Lecturer selection before login

Secure login/signup with matric number or staff ID

Faculty → Department → Level → Course selection

Assignment submission with multiple file types (Document, Image, Text, Mixed)

Submission history with grades and statuses

Lecturer grading with quick-score buttons and editable marks

File integrity checks (hashing) and upload validation

Responsive, clean UI following KWASU-inspired color palette


Demo Walkthrough
1️⃣ Preloader

Shows animated portal name (“UNIFIED SUBMISSION PORTAL”) for 3 seconds

User selects role (Student / Lecturer)

Redirects to login page for the chosen role

2️⃣ Login Page

Fields:

Students: Matric Number + Password

Lecturers: Staff ID + Password

Links:

“Forgot Password?”

“Create an Account” → signup page

Clear error messages for invalid credentials

3️⃣ Signup Page

Fields:

Student: Matric Number, Faculty, Department, Level, Password

Lecturer: Staff ID, Faculty, Department, Password

Faculty → Department → Level → Course dropdowns (dynamic)

Submit button validates inputs before sending to backend

4️⃣ Student Dashboard

Shows enrolled courses based on level and department

Each course links to assignment submission page

Submission history table shows:

Assignment title

Course

Status (Submitted / Pending)

Score (after grading)

5️⃣ Assignment Submission

Choose submission type: Document, Image, Text, Mixed

File upload validation (type, size)

Progress bar for upload

Auto-hash verification after submission

6️⃣ Lecturer Dashboard

Courses displayed via Unique Course Key (UCK)

Assignment list per course

Grading interface:

Quick-score buttons (5, 10, 15, 20, Full marks)

Click once → auto-save

Editable if lecturer wants to update score

Submission list shows student submissions with status

7️⃣ Profile Page

Students and lecturers can:

View personal info

Edit profile or change password

Dashboard and profile separated for clarity





Team Notes / Development Guidelines


Role enforcement: Ensure students cannot access lecturer pages and vice versa

JWT Tokens: Store securely (localStorage/sessionStorage), attach to all protected API calls

Input validation: No empty fields, proper email/ID format

File uploads: Only allowed types; show progress and feedback

UI consistency: Follow KWASU-inspired color palette and layout

Backend integration: All pages communicate with C# endpoints using structured API contracts