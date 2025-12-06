---
layout: page
title: "4. Airflow"
parent: User Guide
permalink: /airflow-note/
nav_order: 4
---

# Airflow

![Airflow Screenshot](/assets/img/airflow-note/airflow.png)

For all the workflows we create, two DAGs (Directed Acyclic Graphs) are generated in Airflow:
- **Deployment DAG**: Responsible for deploying all the processors in the workflow.
- **Undeployment DAG**: Responsible for undeploying all the processors in the workflow.

This is why there is an Airflow icon in the sidebar, which contains an iframe that takes you directly to the Airflow web page. Additionally, each workflow in the Lab page has an Airflow tab to inspect the corresponding Airflow DAG.