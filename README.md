<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0078D4&height=200&section=header&text=TEKSEL%20Azure%20CI/CD&fontSize=60&fontColor=ffffff&animation=fadeIn" width="100%" />
</div>

<div align="center">
  <h3>Enterprise-Grade Full-Stack Application on Azure with Containerization, CI/CD, and DevSecOps</h3>
  <h4>React • Node.js • Express • Azure SQL • Docker • Azure DevOps</h4>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Microsoft_Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Azure_DevOps-0078D4?style=for-the-badge&logo=azuredevops&logoColor=white" alt="Azure DevOps" />
</div>

---

## Overview

TEKSEL is a production-grade, full-stack Tutorial Management application deployed on Microsoft Azure using enterprise DevOps practices. The project demonstrates the complete journey of taking a containerized application from source code to a live cloud deployment with automated CI/CD pipelines, multi-environment deployment strategies, production approval gates, and secure secret management.

The application features a React.js frontend hosted on Azure Static Web App, a Node.js and Express backend running in a Docker container on Azure App Service, and an Azure SQL Database for persistent storage. The entire build, push, and deploy workflow is automated through Azure DevOps multi-stage YAML pipelines integrated with Azure Container Registry.

This project also includes a real-world debugging case study where a database driver compatibility issue between Sequelize ORM (MySQL) and Azure SQL Server (MSSQL) was diagnosed and resolved through systematic log analysis, type coercion fixes, and automated redeployment via the existing CI/CD pipeline.

---

## Live Deployment

| Component | Live URL |
|-----------|----------|
| **Frontend (Static Web App)** | [https://victorious-sea-03906aa00.7.azurestaticapps.net](https://victorious-sea-03906aa00.7.azurestaticapps.net) |
| **Backend API (App Service)** | [https://app-teksel-backend-dev-sea-01-dahjcgfkewdagwhp.southeastasia-01.azurewebsites.net](https://app-teksel-backend-dev-sea-01-dahjcgfkewdagwhp.southeastasia-01.azurewebsites.net) |
| **Health Endpoint** | [https://app-teksel-backend-dev-sea-01-dahjcgfkewdagwhp.southeastasia-01.azurewebsites.net/health](https://app-teksel-backend-dev-sea-01-dahjcgfkewdagwhp.southeastasia-01.azurewebsites.net/health) |

---

## Submission Screenshots

### 1. Successful Pipeline Run

![Successful Pipeline Run](screenshots/pipeline-success.png)

*Backend-CICD pipeline showing all multi-stage deployments completed successfully with Build, Deploy to Development, and Deploy to Production stages all green.*

### 2. Azure Container Registry with Pushed Images

![ACR with Pushed Images](screenshots/acr-images.png)

*Azure Container Registry (acrtekseldeveus01) showing both teksel-backend and teksel-frontend repositories with multiple build tags pushed through automated CI/CD.*

---

## Key Features

- Multi-stage Docker builds for optimized production container images
- Automated CI/CD pipelines triggered on Git push to develop and master branches
- Multi-environment deployment strategy (Development and Production)
- Production approval gate requiring manual review before deployment
- Git Flow branching with master, develop, and feature branches
- Secure secret management through Azure DevOps Variable Groups
- Azure Service Connections using Workload Identity Federation
- Cost-optimized serverless Azure SQL Database with auto-pause
- Global CDN delivery for frontend via Azure Static Web App
- Comprehensive rollback procedure with Git tags and Docker image versioning

---

## Tech Stack

**Frontend:**
- React.js (16.x)
- Axios HTTP Client
- Nginx Web Server (Alpine)

**Backend:**
- Node.js 18 (Alpine)
- Express.js
- Sequelize ORM (5.21)
- Tedious SQL Server Driver (19.2.1)

**Database:**
- Azure SQL Database (Serverless)

**Cloud Platform (Microsoft Azure):**
- Azure App Service (B1 Linux Container)
- Azure Static Web App (Free Tier)
- Azure Container Registry (Basic)
- Azure SQL Server
- Azure Resource Groups

**CI/CD and DevOps:**
- Azure DevOps Pipelines (Multi-Stage YAML)
- Azure Repos (Git)
- Azure DevOps Variable Groups
- Azure DevOps Service Connections

**Tools and Platforms:**
- Docker and Docker Compose
- Git and Git Flow
- GitHub
- Visual Studio Code
- Azure Portal and Azure CLI

---

## System Architecture
User Browser
|
| HTTPS Request
v
Azure Static Web App (React Frontend)
|
| HTTP/JSON via Axios
v
Azure App Service (Node.js Backend Container)
|
| Sequelize ORM with Tedious Driver
v
Azure SQL Database (Serverless)

text

            CI/CD Flow
            
Git Push (develop or master)
|
v
Azure DevOps Pipeline Triggered
|
v
Build Docker Image
|
v
Push to Azure Container Registry
|
v
Deploy to App Service (Dev)
|
v
Approval Gate (for Production)
|
v
Deploy to App Service (Production)

text


---

## Project Structure
docker-compose-react-nodejs-mysql/
│
├── bezkoder-api/
│ ├── app/
│ │ ├── config/
│ │ │ └── db.config.js
│ │ ├── controllers/
│ │ │ └── tutorial.controller.js
│ │ ├── models/
│ │ │ ├── index.js
│ │ │ └── tutorial.model.js
│ │ └── routes/
│ │ └── turorial.routes.js
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── .env.sample
│ ├── package.json
│ └── server.js
│
├── bezkoder-ui/
│ ├── src/
│ │ ├── components/
│ │ │ ├── add-tutorial.component.js
│ │ │ ├── tutorial.component.js
│ │ │ └── tutorials-list.component.js
│ │ ├── services/
│ │ │ └── tutorial.service.js
│ │ ├── App.js
│ │ ├── http-common.js
│ │ └── index.js
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── nginx.conf
│ └── package.json
│
├── azure-pipelines/
│ ├── backend-pipeline.yml
│ └── frontend-pipeline.yml
│
├── docs/
│ └── ROLLBACK.md
│
├── screenshots/
│ ├── pipeline-success.png
│ └── acr-images.png
│
├── docker-compose.yml
├── .gitignore
└── README.md

text


---

## How It Works

### 1. Code Push Triggers Pipeline
A developer pushes code to the develop or master branch. Azure DevOps detects the push via webhook and automatically triggers the corresponding CI/CD pipeline (backend or frontend based on changed paths).

### 2. Build Stage
The pipeline checks out the source code, authenticates with Azure Container Registry using a service connection, builds the Docker image using the multi-stage Dockerfile, tags it with the unique Azure DevOps Build ID, and pushes the image to ACR.

### 3. Deploy to Development
For pushes to the develop branch, the pipeline deploys the newly built container image to the development App Service. The App Service pulls the image from ACR and restarts with the new code.

### 4. Production Approval Gate
For pushes to the master branch, the pipeline pauses at the Production stage and requests manual approval from a designated approver. This gate prevents accidental production deployments and enforces a release control checkpoint.

### 5. Deploy to Production
Once approved, the pipeline deploys the same container image to the production App Service. The application is now live with the new code, and users can verify the deployment via the public URL.

---

## Installation and Setup

### Prerequisites

- Node.js 18 or higher
- Docker Desktop
- Git
- Azure account with active subscription
- Azure CLI (optional, for command-line operations)

### Setup Steps

1. Clone the repository:

```bash
git clone https://github.com/MuhammadYasir85a/docker-compose-react-nodejs-mysql.git
cd docker-compose-react-nodejs-mysql
Configure environment variables by copying the sample file:
Bash

cp bezkoder-api/.env.sample bezkoder-api/.env
Build and run locally using Docker Compose:
Bash

docker-compose up --build
Access the application:
Bash

Frontend: http://localhost:8081
Backend:  http://localhost:8080
The application will start with the frontend on port 8081 and the backend API on port 8080.

Usage
Creating a Tutorial
Navigate to the live frontend URL
Click the Add button in the navigation menu
Enter a title and description
Click Submit to save the tutorial
The tutorial appears in the Tutorials list immediately
Viewing Tutorials
Click Tutorials in the navigation menu
Browse the list of all submitted tutorials
Click any tutorial to view full details
Use the search bar to filter tutorials by title
Editing and Deleting
Open a tutorial from the list
Modify the title, description, or published status
Click Update to save changes
Click Delete to permanently remove the tutorial
Use Cases
Educational DevOps Lab — Demonstrates a complete enterprise CI/CD pipeline for student learning
Reference Implementation — Provides a working example of containerized full-stack deployment on Azure
Tutorial Management — Functional CRUD application for tracking tutorials and learning resources
Real-World Debugging Case Study — Documents driver compatibility issues and their resolution
DevSecOps Foundation — Establishes secure secret management and deployment practices
Real-World Engineering Challenge
A significant database driver compatibility issue was encountered and resolved during the project:

Problem: The bezkoder application was originally built for MySQL but was deployed against Azure SQL Server. The mysql2 driver could not communicate with SQL Server's T-SQL protocol, causing all database operations to fail with HTTP 500 errors.

Root Cause: A combination of three issues:

Wrong database driver (mysql2 instead of tedious)
Wrong Sequelize dialect (mysql instead of mssql)
Sequelize 5.21 BOOLEAN parameter binding bug with tedious driver
Solution: Installed the tedious driver, switched Sequelize dialect to mssql, added Azure SQL encryption options, and changed the published column from BOOLEAN to TINYINT with explicit integer values to bypass the Sequelize 5.21 bug.

Outcome: The fix was deployed through the existing CI/CD pipeline in under 4 minutes, demonstrating the value of automated deployment infrastructure for rapid incident response.

Detailed analysis and rollback procedures are documented in docs/ROLLBACK.md.

Future Enhancements
Migrate from manual Azure Portal provisioning to Terraform Infrastructure-as-Code
Integrate SonarQube for Static Application Security Testing (SAST)
Add Snyk for Software Composition Analysis (SCA) and dependency vulnerability scanning
Implement OWASP ZAP for Dynamic Application Security Testing (DAST)
Upgrade Sequelize ORM from version 5.21 to 6.x for better SQL Server support
Add unit and integration test stages to the CI/CD pipeline
Implement Azure Application Insights for production monitoring and alerting
Configure Azure Front Door for advanced traffic management and WAF
Learning Outcomes
Through this project, the following concepts and skills were developed:

Multi-stage Docker builds and container optimization techniques
Azure cloud resource provisioning and naming conventions
Azure DevOps YAML pipeline authoring with multi-stage deployments
Service Connection security and Workload Identity Federation
Variable Groups and encrypted secret management in CI/CD
Git Flow branching model with feature, develop, and master branches
Production approval gates and environment-based deployment strategies
Real-world debugging of database driver compatibility issues
Safety net design with Git tags, backup branches, and rollback procedures
Cost optimization on Azure (serverless databases, free tiers, basic SKUs)
Project Status
Status: Completed

The project has been fully implemented and tested end-to-end. All core lab objectives have been met, including containerization, Azure resource provisioning, CI/CD pipeline automation, multi-stage deployment with approval gates, Git Flow branching, and secure secret management. The application is live, functional, and persisting data correctly in Azure SQL Database.

Academic Information
Field	Detail
Course	DevOps and Cloud Computing Lab
Project Name	Enterprise Azure CI/CD Lab (TEKSEL)
Institution	Namal University Mianwali
Department	Computer Science
Project Type	Academic Lab Project
Semester	Spring 2026
Submitted To	Sir Shazad Arif
Author
Muhammad Yasir

Computer Science Undergraduate at Namal University Mianwali
Aspiring AI and Computer Vision Engineer

<div> <a href="https://www.linkedin.com/in/muhammad-yasir-6a9500343/"> <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /> </a> <a href="mailto:muhammadyasir85a@gmail.com"> <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /> </a> <a href="https://github.com/MuhammadYasir85a"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /> </a> </div>
Acknowledgments
Namal University Mianwali for academic guidance and providing the learning environment
Sir Shazad Arif for project supervision and DevOps training
bezkoder for the open-source full-stack reference application that served as the foundation
Microsoft Azure for the comprehensive cloud platform and student subscription credits
Docker and Sequelize open-source communities for excellent documentation
Stack Overflow and GitHub Issues community for resolving the Sequelize-Tedious compatibility bug
References
Microsoft Azure Documentation: https://learn.microsoft.com/azure
Azure DevOps YAML Pipeline Reference: https://learn.microsoft.com/azure/devops/pipelines
Docker Multi-Stage Build Documentation: https://docs.docker.com/build/building/multi-stage
Sequelize ORM Documentation: https://sequelize.org/docs/v6
Tedious SQL Server Driver: https://tediousjs.github.io/tedious
Git Flow Workflow Guide: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
License
This project is licensed under the MIT License.

This project was created for educational purposes as part of the DevOps and Cloud Computing Lab at Namal University Mianwali. The codebase is freely available for learning and reference.

<div align="center"> <i>"Building production-grade systems is not about avoiding problems, but about designing systems that recover gracefully when problems happen."</i> </div><br/><div align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0078D4&height=100&section=footer" width="100%" /> </div> ```