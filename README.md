# todolist_collaborative📌 Smart To-Do List Application

A Full-Stack Collaborative Project using Django REST Framework (DRF) and React

📖 Project Overview

Smart To-Do List is a full-stack task-management application that allows users to securely create, update, delete, and track tasks.
The backend is built with Django REST Framework (DRF), while the frontend uses React for a modern, interactive interface.

This project is designed to help users organize their daily activities while demonstrating full-stack development, API creation, authentication, and team collaboration.

🎯 Main Features
🔐 User Authentication

User registration

Login with JWT token

Logout

Only logged-in users can manage tasks

📝 Task Management

Create, view, update, and delete tasks

Mark tasks as completed

Add priorities (Low, Medium, High)

Optional due date field

🔍 Filtering & Searching

Filter tasks by status (Pending, Completed, In Progress)

Sort tasks by due date, priority, or creation date

Search tasks by keywords

👤 User-Specific Data

Every user sees only their own tasks

Backend automatically assigns tasks to the logged-in user

🏗️ System Architecture
Backend: Django REST Framework

Provides API endpoints

Handles authentication using JWT

Validates data and enforces permissions

Uses PostgreSQL or SQLite

Frontend: React

Displays user interface

Makes API requests using Axios

Stores JWT token for authenticated routes

Includes pages for:

Login

Register

Task List

Create / Edit Task

🛠️ Tech Stack
Backend

Python 3

Django

Django REST Framework

SimpleJWT

PostgreSQL / SQLite

Frontend

React

Axios

React Router

TailwindCSS / CSS Modules (optional)

Tools

Git & GitHub

Postman or Thunder Client

VS Code or preferred IDE

👥 Team Collaboration
Branching Strategy
main         → production-ready code  
dev          → integration branch  
backend      → backend development  
frontend     → frontend development

Workflow

Developers work on their own branches.

They push changes to their branch.

They create Pull Requests (PRs) into dev.

After testing, dev is merged into main.

Team Roles (Recommended)

Backend Developer: DRF API, authentication, models, database

Frontend Developer: React pages, state management, API integration

Tester/QA: Testing endpoints, UI flows, validation

Project Manager: Documentation, task assignment, team coordination

🚀 How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/your-username/todo-project.git
cd todo-project

🖥️ Backend Setup (DRF)
Install Dependencies
pip install -r requirements.txt

Run Migrations
python manage.py migrate

Start Server
python manage.py runserver


Backend runs on:

http://127.0.0.1:8000

💻 Frontend Setup (React)
Go to frontend folder
cd frontend

Install dependencies
npm install

Start React app
npm start


Frontend runs on:

http://localhost:3000

🔗 API Endpoints (Examples)
Method	Endpoint	Description
POST	/api/auth/login/	Login & get JWT
POST	/api/auth/register/	Create account
GET	/api/tasks/	List tasks
POST	/api/tasks/	Create task
PUT/PATCH	/api/tasks/<id>/	Update task
DELETE	/api/tasks/<id>/	Delete task
📦 Folder Structure (Recommended)
Backend
backend/
 └── accounts/
 └── tasks/
 └── settings.py

Frontend
frontend/
 └── src/
      ├── components/
      ├── pages/
      ├── api/
      └── App.js

📚 Future Enhancements

Real-time updates with WebSockets

Task categories or tagging

Notifications for due dates

Collaborative/shared tasks

Mobile app (React Native or Flutter)

🤝 Contributing

Fork the repository

Create your feature branch

Commit your changes

Open a Pull Request

🏁 Conclusion

This project is a practical demonstration of full-stack development, teamwork, API design, and modern web technologies. It is ideal for portfolio use, learning, or real-world productivity.
