---
layout: page
title: "3. Creating Workflows"
parent: User Guide
permalink: /creating-workflows/
nav_order: 3
---

# Creating Workflows

## Lab Tab

### Creating Workflows

#### Workflow Specifications Page

**Overview**: The starting point for creating workflows.

![Workflow Specs Image](images/workflowspecs.png)

**Workflow Specifications**:
- **Name**  
- **Description**  
- **Configuration**: Define the DAG (Directed Acyclic Graph) that represents the workflow in Airflow.

### Flow Creator

**Overview**: An interactive interface for designing workflows using nodes and edges.

![Flow Creator Image](images/flowCreator.png)

**Features**:
- **Add Node**: Use the “Add Node” button to add processors to your workflow.
- **View Workflow**: Nodes are displayed in a 2D representation and can be connected using edges.

### Processors

#### Processor Configuration

- Define the **Processor Type** and it's parameters.
- Choose a **Worker** for deployment.
- Assign **Data Input** and **Data Output** using digital resources.