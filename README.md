# Unified Submission Portal (Frontend)

## 📌 Project Overview
The **Unified Submission Portal** is a web-based application designed to streamline the assignment submission process in an academic setting. It serves two distinct user roles:
1.  **Students:** Can upload assignment documents (PDF, DOCX) and view submission history.
2.  **Lecturers:** Can view incoming submissions from students and download them for review.

This repository contains the **Frontend User Interface** developed using HTML, CSS, and JavaScript.

---

## 🚀 Features

### Authentication
*   **Unified Login:** Single login page for both students and lecturers.
*   **Role-Based Registration:** Sign-up form with dynamic role selection.
*   **Dependent Dropdowns:** Faculty selection automatically updates the available Departments (JavaScript logic).

### Student Portal
*   **Dashboard:** View assignment status.
*   **Submission Form:** Upload files with course code and description.
*   **History Table:** Track past submissions and grading status.

### Lecturer Portal
*   **Dashboard:** View a list of student submissions.
*   **Filtering:** Filter submissions by Course Code.
*   **Action:** Download student files.

---

## 🛠️ Tech Stack
*   **Structure:** HTML5
*   **Styling:** CSS3 (Custom Design System with CSS Variables)
*   **Logic:** JavaScript (Vanilla JS for DOM manipulation and routing)
*   **Fonts:** Inter (Google Fonts)

---

## 📂 Folder Structure

```text
/project-folder
│
├── index.html      # Main HTML structure (SPA architecture)
├── style.css       # All styling, colors, and responsive layout
├── script.js       # Logic for navigation, dropdowns, and mock auth
└── README.md       # Project documentation

How to Use
Since the backend is not yet connected, the project uses Mock Logic in script.js to simulate user flows.
1. Logging In
The system detects the user role based on the email address entered:
To view Student Dashboard:
Email: student@uni.edu (or any random email)
Password: (Any text)
To view Lecturer Dashboard:
Email: lecturer@uni.edu (Must contain the word "lecturer")
Password: (Any text)
2. Creating an Account
Click "Create an account" on the login screen.
Select a Faculty (e.g., "Applied Sciences").
The Department dropdown automatically updates with relevant options
