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

![Workflow Specs Image](workflowspecs.png)

#### Workflow Specifications Page

**Overview**: The starting point for creating workflows.

**Workflow Specifications**:
- **Name**  
- **Description**  
- **Configuration**: Define the DAG (Directed Acyclic Graph) that represents the workflow in Airflow.

### Flow Creator

![Flow Creator Image](flowCreator.png)

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
- **Streamhandler**: Deploys a full Kafka cluster.
- **Logstash**: Creates a pipeline that transfers data from one digital resource to another.
- **Kibana**: Creates a Logstash pipeline that takes input from a digital resource and transfers it to Elasticsearch for visualization through the workflow editor.
- **Logstash -> Observation**: Creates a Logstash pipeline that takes data from the input digital resource, converts it into an observation, and saves it in a predefined collection.