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

## Project Demo Video

A complete walkthrough of the project demonstrating the live deployment, CI/CD pipeline execution, real-time bug debugging, and end-to-end functionality is available in this repository.

**Video File:** [Watch the Full Project Demo](./demo)

The video covers:
- Live application demonstration with tutorial creation
- Azure DevOps pipeline execution showing all stages
- Azure Container Registry with versioned Docker images
- Real-time database operations in Azure SQL
- Production approval gate workflow
- Complete end-to-end data flow verification

> **Note:** Download the video file to view in full quality. The video serves as comprehensive evidence of the working deployment before resources were decommissioned for cost optimization.

---

## Project Status and Resource Decommissioning

**Current Status:** Successfully Completed and Archived

The project was fully deployed, tested, and verified end-to-end on Microsoft Azure during the development phase. All Azure resources have since been decommissioned to manage costs on the student subscription. This is a deliberate cost optimization decision that demonstrates responsible cloud resource management.

**What Remains Available:**
- Complete source code in this repository
- All Docker container configurations
- Complete CI/CD pipeline YAML files
- Comprehensive rollback procedures and documentation
- 60+ screenshots documenting every phase
- Full project demonstration video
- Detailed technical report

**What Was Decommissioned:**
- Live Azure resources (App Service, SQL Database, Container Registry, Static Web App)
- Live deployment URLs

**Reproducibility:** The entire infrastructure can be recreated in under 2 hours by following the setup steps in this README. All configurations are documented and the deployment process is fully automated through the included CI/CD pipelines.

---

## Original Live Deployment URLs (Archived)

The following URLs were active during the project verification phase:

| Component | Status | Original URL |
|-----------|--------|--------------|
| Frontend (Static Web App) | Archived | victorious-sea-03906aa00.7.azurestaticapps.net |
| Backend API (App Service) | Archived | app-teksel-backend-dev-sea-01-dahjcgfkewdagwhp.southeastasia-01.azurewebsites.net |
| Health Endpoint | Archived | /health endpoint on backend URL |

These URLs are no longer active. Refer to the project demonstration video for proof of working deployment.

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

The application follows a three-tier architecture with full CI/CD automation.

**Application Data Flow:**

User Browser sends HTTPS request to Azure Static Web App (React Frontend). The frontend makes HTTP and JSON requests via Axios to Azure App Service (Node.js Backend Container). The backend uses Sequelize ORM with Tedious Driver to communicate with Azure SQL Database (Serverless).

**CI/CD Pipeline Flow:**

A developer pushes code to the develop or master branch. Azure DevOps Pipeline triggers automatically. The pipeline builds the Docker image, pushes it to Azure Container Registry, then deploys to App Service (Development environment). For master branch pushes, an approval gate pauses the deployment until manually approved by an authorized reviewer, then deploys to App Service (Production environment).

---

## Project Structure

The project follows a monorepo pattern with separate folders for backend, frontend, pipelines, documentation, and assets.

**Backend (bezkoder-api):**
- `app/config/db.config.js` - Database configuration with environment variables
- `app/controllers/tutorial.controller.js` - CRUD request handlers with type coercion
- `app/models/index.js` - Sequelize initialization and database connection
- `app/models/tutorial.model.js` - Tutorial data model with explicit field types
- `app/routes/turorial.routes.js` - API route definitions
- `Dockerfile` - Multi-stage container build
- `.env.sample` - Template for environment variables
- `server.js` - Application entry point

**Frontend (bezkoder-ui):**
- `src/components/` - React UI components (add, list, view)
- `src/services/tutorial.service.js` - API service layer using Axios
- `src/http-common.js` - Axios HTTP client configuration
- `src/App.js` - Main React application component
- `Dockerfile` - Multi-stage build with Nginx
- `nginx.conf` - Nginx configuration supporting React Router

**CI/CD Pipelines (azure-pipelines):**
- `backend-pipeline.yml` - Backend build, push, and deploy workflow
- `frontend-pipeline.yml` - Frontend build and deploy workflow

**Documentation (docs):**
- `ROLLBACK.md` - Emergency rollback procedures and recovery methods

**Demo (demo):**
- `Teksel_Project_Demo.mp4` - Complete project demonstration video

**Other Files:**
- `docker-compose.yml` - Local development orchestration
- `.gitignore` - Comprehensive security exclusions
- `README.md` - This documentation

---

## How It Works

**Step 1: Code Push Triggers Pipeline**

A developer pushes code to the develop or master branch. Azure DevOps detects the push via webhook and automatically triggers the corresponding CI/CD pipeline based on the changed file paths.

**Step 2: Build Stage**

The pipeline checks out the source code, authenticates with Azure Container Registry using a service connection, builds the Docker image using the multi-stage Dockerfile, tags it with the unique Azure DevOps Build ID, and pushes the image to ACR.

**Step 3: Deploy to Development**

For pushes to the develop branch, the pipeline deploys the newly built container image to the development App Service. The App Service pulls the image from ACR and restarts with the new code.

**Step 4: Production Approval Gate**

For pushes to the master branch, the pipeline pauses at the Production stage and requests manual approval from a designated approver. This gate prevents accidental production deployments and enforces a release control checkpoint.

**Step 5: Deploy to Production**

Once approved, the pipeline deploys the same container image to the production App Service. The application goes live with the new code automatically.

---

## Installation and Setup

### Prerequisites

- Node.js 18 or higher
- Docker Desktop
- Git
- Azure account with active subscription
- Azure CLI (optional, for command-line operations)

### Local Development Setup

**Step 1:** Clone the repository:

```bash
git clone https://github.com/MuhammadYasir85a/docker-compose-react-nodejs-mysql.git
cd docker-compose-react-nodejs-mysql
```

**Step 2:** Configure environment variables by copying the sample file:

```bash
cp bezkoder-api/.env.sample bezkoder-api/.env
```

**Step 3:** Build and run locally using Docker Compose:

```bash
docker-compose up --build
```

**Step 4:** Access the application:

- Frontend: http://localhost:8081
- Backend API: http://localhost:8080

The application will start with the frontend on port 8081 and the backend API on port 8080.

---

## How to Recreate Azure Deployment

The complete Azure infrastructure can be recreated in under 2 hours by following these steps:

**Step 1: Provision Azure Resources**

Create the following resources via Azure Portal:
- Resource Group
- Azure Container Registry (Basic tier)
- Azure SQL Server with Serverless Database
- Azure App Service Plan (B1 Linux)
- Azure App Service (Container)
- Azure Static Web App (Free tier)

**Step 2: Configure Azure DevOps**

- Create an Azure DevOps organization and project
- Import this GitHub repository
- Create three service connections (Azure RM, Docker Registry, GitHub)
- Create a Variable Group with deployment configuration

**Step 3: Deploy via CI/CD**

- Push code to develop branch to trigger development deployment
- Merge to master branch to trigger production deployment with approval gate

The pipelines handle all build, push, and deployment automation. No manual intervention is required after the initial setup.

---

## Usage Guide

**Creating a Tutorial:**
1. Navigate to the application URL
2. Click the Add button in the navigation menu
3. Enter a title and description
4. Click Submit to save the tutorial
5. The tutorial appears in the Tutorials list immediately

**Viewing Tutorials:**
1. Click Tutorials in the navigation menu
2. Browse the list of all submitted tutorials
3. Click any tutorial to view full details
4. Use the search bar to filter tutorials by title

**Editing and Deleting:**
1. Open a tutorial from the list
2. Modify the title, description, or published status
3. Click Update to save changes
4. Click Delete to permanently remove the tutorial

---

## Use Cases

- **Educational DevOps Lab** - Demonstrates a complete enterprise CI/CD pipeline for student learning
- **Reference Implementation** - Provides a working example of containerized full-stack deployment on Azure
- **Tutorial Management** - Functional CRUD application for tracking tutorials and learning resources
- **Real-World Debugging Case Study** - Documents driver compatibility issues and their resolution
- **DevSecOps Foundation** - Establishes secure secret management and deployment practices

---

## Real-World Engineering Challenge

A significant database driver compatibility issue was encountered and resolved during the project, demonstrating real-world DevOps debugging and incident response skills.

**Problem:** The bezkoder application was originally built for MySQL but was deployed against Azure SQL Server. The mysql2 driver could not communicate with SQL Server's T-SQL protocol, causing all database operations to fail with HTTP 500 errors.

**Root Cause Analysis:** The issue was a combination of three factors:
1. Wrong database driver (mysql2 instead of tedious)
2. Wrong Sequelize dialect (mysql instead of mssql)
3. Sequelize 5.21 BOOLEAN parameter binding bug with the tedious driver

**Diagnostic Process:**
- Analyzed App Service Log Stream for specific error messages
- Identified the exact parameter that was failing
- Traced the root cause to Sequelize's internal type binding mechanism
- Researched the known compatibility issue in Sequelize GitHub repository

**Solution Implementation:**
- Installed the tedious driver as a project dependency
- Switched Sequelize dialect configuration from mysql to mssql
- Added Azure SQL encryption options for secure connections
- Changed the published column from BOOLEAN to TINYINT with explicit integer values to bypass the Sequelize 5.21 bug
- Updated the controller with type coercion to ensure proper data types

**Safety Measures Taken:**
- Created a backup branch before making changes
- Tagged the working version in Git for instant rollback
- Documented complete rollback procedures
- Tested all changes in development before promoting to production

**Outcome:** The fix was deployed through the existing CI/CD pipeline in under 4 minutes, demonstrating the value of automated deployment infrastructure for rapid incident response. The application is now fully functional with data persisting correctly in Azure SQL Database.

Detailed analysis and rollback procedures are documented in the `docs/ROLLBACK.md` file.

---

## Future Enhancements

- Migrate from manual Azure Portal provisioning to Terraform Infrastructure-as-Code
- Integrate SonarQube for Static Application Security Testing (SAST)
- Add Snyk for Software Composition Analysis (SCA) and dependency vulnerability scanning
- Implement OWASP ZAP for Dynamic Application Security Testing (DAST)
- Upgrade Sequelize ORM from version 5.21 to 6.x for better SQL Server support
- Add unit and integration test stages to the CI/CD pipeline
- Implement Azure Application Insights for production monitoring and alerting
- Configure Azure Front Door for advanced traffic management and Web Application Firewall (WAF)

---

## Learning Outcomes

Through this project, the following concepts and skills were developed:

- Multi-stage Docker builds and container optimization techniques
- Azure cloud resource provisioning and naming conventions
- Azure DevOps YAML pipeline authoring with multi-stage deployments
- Service Connection security and Workload Identity Federation
- Variable Groups and encrypted secret management in CI/CD
- Git Flow branching model with feature, develop, and master branches
- Production approval gates and environment-based deployment strategies
- Real-world debugging of database driver compatibility issues
- Safety net design with Git tags, backup branches, and rollback procedures
- Cost optimization on Azure (serverless databases, free tiers, basic SKUs)
- Responsible cloud resource lifecycle management

---

## Academic Information

| Field | Detail |
|-------|--------|
| Course | DevOps and Cloud Computing Lab |
| Project Name | Enterprise Azure CI/CD Lab (TEKSEL) |
| Institution | Namal University Mianwali |
| Department | Computer Science |
| Project Type | Academic Lab Project |
| Semester | Spring 2026 |
| Submitted To | Sir Shazad Arif |
| Submitted By | Muhammad Yasir |
| Registration | NUM-BSCS-2023-37 |

---

## Author

**Muhammad Yasir**

Computer Science Undergraduate at Namal University Mianwali  
Aspiring DevOps and Cloud Engineer

<div>
  <a href="https://www.linkedin.com/in/muhammad-yasir-6a9500343/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:muhammadyasir85a@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://github.com/MuhammadYasir85a">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</div>

---

## Acknowledgments

- **Namal University Mianwali** for academic guidance and providing the learning environment
- **Sir Shazad Arif** for project supervision and structured DevOps training
- **Tkxel** for designing this comprehensive lab project that mirrors real production environments
- **Adeel Ahmed**, DevOps HOD at Tkxel, for crafting the curriculum
- **bezkoder** for the open-source full-stack reference application that served as the foundation
- **Microsoft Azure** for the comprehensive cloud platform and student subscription credits
- **Docker** and **Sequelize** open-source communities for excellent documentation
- **Stack Overflow** and **GitHub Issues** community for resolving the Sequelize-Tedious compatibility bug

---

## References

- Microsoft Azure Documentation: https://learn.microsoft.com/azure
- Azure DevOps YAML Pipeline Reference: https://learn.microsoft.com/azure/devops/pipelines
- Docker Multi-Stage Build Documentation: https://docs.docker.com/build/building/multi-stage
- Sequelize ORM Documentation: https://sequelize.org/docs/v6
- Tedious SQL Server Driver: https://tediousjs.github.io/tedious
- Git Flow Workflow Guide: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

---

## License

This project is licensed under the **MIT License**.

This project was created for educational purposes as part of the DevOps and Cloud Computing Lab at Namal University Mianwali. The codebase is freely available for learning and reference.

---

<div align="center">
  <i>"Building production-grade systems is not about avoiding problems, but about designing systems that recover gracefully when problems happen."</i>
</div>

<br/>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0078D4&height=100&section=footer" width="100%" />
</div>
