# TT4 Final Exam - 1280_2025050212001600

## Part I – Multiple Choice Questions (20 questions)

### 🐳 Docker
1. Which file is used to define how a Docker image is built?
   - A) docker-compose.yml
   - **B) Dockerfile**
   - C) image.config
   - D) container.yml

2. What does docker images command show?
   - A) Current containers
   - **C) Downloaded images**
   - C) Docker logs
   - D) Running apps

3. How do you remove a Docker container?
   - A) docker stop
   - B) docker delete
   - C) docker remove
   - **D) docker rm**

4. What port does Docker map to when using EXPOSE 80?
   - A) Host port 3000
   - **B) Container's internal port 80**
   - C) Always port 8080
   - D) The backend's IP

### 🌿 Git / GitHub
5. Which command initializes a new Git repository?
   - A) git new
   - B) git start
   - **C) git init**
   - D) git open

6. What is a Git branch?
   - A) A copy of a file
   - B) A code versioning snapshot
   - **C) A version of your repository history**
   - D) A type of commit

7. What does git pull do?
   - A) Push commits to GitHub
   - B) Reset your repo
   - **C) Fetch and merge from remote**
   - D) Backup your files

8. How do you stage all modified files?
   - A) git all
   - B) git push
   - C) git commit -m
   - **D) git add .**

### ⚙️ .NET Core
9. What is Entity Framework Core used for?
   - A) Managing user roles
   - B) Handling web requests
   - **C) Mapping C# classes to database tables**
   - D) Running JavaScript

10. What's the purpose of appsettings.json?
   - A) Store API endpoints
   - **B) Configure app settings like DB connection strings**
   - C) Define controllers
   - D) Handle routing

11. Which command runs a .NET Core project?
   - A) dotnet start
   - B) dotnet compile
   - **C) dotnet run**
   - D) dotnet execute

12. What does [HttpPost] represent in a controller?
   - A) A file upload
   - B) An HTML POST form
   - **C) An endpoint for POST requests**
   - D) A redirect

### ⚛️ Frontend Frameworks
13. What command creates a new Angular project?
   - A) ng app create
   - B) ng start
   - **C) ng new**
   - D) angular init

14. In React, what is a component?
   - A) A database table
   - **B) A function or class that renders UI**
   - C) A hook
   - D) A node module

15. How do you bind data in VueJS templates?
   - A) {= value =}
   - **B) v-bind:value or :value**
   - C) v-for:value
   - D) @value

16. What is the default file extension for Svelte components?
   - **A) .svelte**
   - B) .svt
   - C) .js
   - D) .component

### 💡 General Concepts
17. What does REST stand for?
   - A) Random Enhanced Server Transfer
   - B) Ready State Environment Transport
   - **C) Representational State Transfer**
   - D) Remote Execution Static Transfer

18. What is JSON used for?
   - A) Sending UI files
   - B) Styling elements
   - **C) Structuring and exchanging data**
   - D) Loading database drivers

19. What is the role of Tailwind CSS?
   - A) It's a database system
   - B) A backend tool for API management
   - **C) A utility-first CSS framework**
   - D) A JavaScript compiler

20. What does docker-compose down do?
   - A) Launches containers
   - **B) Stops and removes containers, networks, volumes**
   - C) Restarts all containers
   - D) Clears Docker images

## Part II – Final Project

### Project: Recipe Manager

This is a fullstack CRUD application for managing recipes. It includes:
- Backend: ASP.NET Core WebAPI with Entity Framework and SQLite
- Frontend: React with Tailwind CSS
- Docker Compose for production-like environment

### Repository Structure
```
/
├── backend/
│   ├── .gitignore
│   ├── Dockerfile
│   └── RecipeManager/
│       ├── Controllers/
│       ├── Models/
│       ├── Program.cs
│       └── ...
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── ...
├── .gitignore
├── docker-compose.yml
├── README.md
```

### How to Run
1. Clone the repository
2. Run `docker-compose up` in the root directory
3. Open your browser to http://localhost:5173/
