# DataCROP Documentation

<div align="center">

[![Deploy Docusaurus to GitHub Pages](https://github.com/datacrop/datacrop/actions/workflows/deploy.yml/badge.svg)](https://github.com/datacrop/datacrop/actions/workflows/deploy.yml)

### Static Site Generation
![Docusaurus](https://img.shields.io/badge/Docusaurus-v3-3ecc5f?style=for-the-badge&logo=docusaurus&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-43853D?style=for-the-badge&logo=node.js&logoColor=white)

### Language & Tooling
![Vue.js](https://img.shields.io/badge/Frontend-Vue.js-42b883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Backend-Spring_Boot-6db33f?style=for-the-badge&logo=springboot&logoColor=white)

### Data & Workflow Platform
![Apache Airflow](https://img.shields.io/badge/Orchestration-Apache_Airflow-017cee?style=for-the-badge&logo=apacheairflow&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Streaming-Apache_Kafka-231f20?style=for-the-badge&logo=apachekafka&logoColor=white)
![ELK Stack](https://img.shields.io/badge/Observability-ELK_Stack-005571?style=for-the-badge&logo=elasticstack&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47a248?style=for-the-badge&logo=mongodb&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/Messaging-RabbitMQ-ff6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Keycloak](https://img.shields.io/badge/Identity-Keycloak-32404b?style=for-the-badge&logo=keycloak&logoColor=white)

### CI/CD & Hosting
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

## Overview
DataCROP (Data Collection Routing & Processing) is a configurable framework for real-time data collection, transformation, filtering, and management across IoT and cybersecurity domains. It emphasizes interoperability through a specialized data model for sources, processors, and results, enabling flexible workflow-driven analytics.

## Versions and Stack Highlights
- Barley (v1.0): MongoDB, Apache Kafka, RabbitMQ, Kafka Streams, Node.js, React, optional Hyperledger Fabric.
- Farro (v2.0): Builds on Barley; MongoDB, Apache Kafka, RabbitMQ, Node.js, React, and algorithm support (Java, Python, R).
- Maize (v3.0, in progress): MongoDB, Apache Kafka, ELK stack; expanding observability and data services.

## Demo Environment
Deployable Farro demo: `https://github.com/datacrop/farro-demo-deployment-scripts`.

## Local Development (Documentation)

The documentation has been migrated to Docusaurus v3 and lives in the root directory. To run the site locally:

1. Ensure Node.js 20+ is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm start
   ```
   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

4. Build the static site (to verify production build):
   ```bash
   npm run build
   ```
   This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Documentation Structure

All markdown content files are now located in the `docs/` directory.
- `docs/home/` - Framework overview and roadmap.
- `docs/setup/` - Maize setup instructions (MVP and manual per-component guides).
- `docs/user-guide/` - End-user workflows, data models, and Pipeline configurations.
- `docs/dev-guide/` - Developer guidance, including processor integration.
