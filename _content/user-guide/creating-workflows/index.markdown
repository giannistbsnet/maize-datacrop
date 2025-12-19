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

![Workflow Specs Image](/assets/img/creating-workflows/workflowspecs.png)

#### Workflow Specifications Page

**Overview**: The starting point for creating workflows.

**Workflow Specifications**:
- **Name**  
- **Description**  
- **Configuration**: Define the DAG (Directed Acyclic Graph) that represents the workflow in Airflow.

### Flow Creator

![Flow Creator Image](/assets/img/creating-workflows/flowCreator.png)

**Overview**: An interactive interface for designing workflows using nodes and edges.

**Features**:
- **Add Node**: Use the “Add Node” button to add processors to your workflow.
- **View Workflow**: Nodes are displayed in a 2D representation and can be connected using edges.

### Processors

#### Processor Configuration

- Define the **Processor Type** and it's parameters.
- Choose a **Worker** for deployment.
- Assign **Data Input** and **Data Output** using digital resources.

**Note**: Before creating a processor in the Flow Creator, ensure that you have already created the data models you plan to use with it. This includes the worker asset and the digital resources that will represent the data input and output you plan to add.

**Basic Processor Types Supported**:
- **Apache Kafka**: Creates a Kafka cluster (used as infrastructure for streaming workflows).
- **Logstash Pipeline**: Creates a pipeline that transfers data from one digital resource to another (supports a custom `logstash_filter`).
- **Kibana Pipeline**: Creates a pipeline that takes input from a digital resource and forwards it to Elasticsearch for visualization through the editor.
- **Context Extraction**: Example processing component shipped as a processor definition (your deployment may include different processors).

**Note**: The list of available processors is driven by processor definitions stored in the Model Repository. Deployers can add more definitions via `config/extra-processors.json` and import them during initialization.
