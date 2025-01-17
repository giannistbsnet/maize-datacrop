---
layout: page
title: "2. Creating Data Models"
parent: User Guide
permalink: /creating-data-models/
nav_order: 2
---

# Creating Data Models

## Warehouse Tab

### My Workflows

**Description**: This section displays a list of workflows you have created.

**Features**:
- **View Workflows**: Browse your existing workflows.
- **Create Workflow**: Redirects you to the Lab tab for creating a new workflow.

![Workflows Image](images/workflows.png)

### My Digital Resources

**Description**: The Digital Resource entity represents the instantiation of a data source within the system.

**Purpose**: Provides a context and connection interface for accessing and utilizing data.

**Key Attributes**:
- **assetID**: Identifies the asset.
- **dataKindID**: Links to the type of data the resource manages.

**Functionality**: Links physical or digital assets to their operational data within DataCROP.

![DS Image](images/ds.png)

### My Workers

**Description**: This section allows you to view and create worker assets.

**Purpose**: Worker assets are responsible for executing processors within workflows.

**Features**:
- Define worker specifications.
- Assign workers to processors for deployment.

![Workers Image](images/workers.png)

### My Data Kinds

**Description**: The Data Kind entity defines the type of data managed in the system.

**Purpose**: Provides metadata about data structure, format, and type.

**Key Attributes**:
- **modelType**: Specifies the data’s structural type (e.g., simple or complex).
- **format**: Indicates the format (e.g., JSON, XML).
- **quantityKind**: Defines whether the data is quantitative or qualitative.

**Functionality**: Facilitates precise processing and analysis of data.

![Datakind Image](images/datakind.png)