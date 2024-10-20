---
layout: page
title: "1. Airflow Setup"
parent: Maize Setup
permalink: /airflow/
nav_order: 2
---

# DataCROP Maize Airflow Processing Engine Deployment

This is a demo deployment instance for the **Maize DataCROP version**. It deploys the Airflow web server responsible for managing tasks within the **DataCROP Workflow Management Engine** infrastructure. The deployment consists of six containers.

## Overview

The DataCROP Maize Airflow Processing Engine is a critical component of the DataCROP Workflow Management Engine. This engine is responsible for orchestrating and managing the execution of various tasks (DAGs) within the DataCROP infrastructure, providing an interface to monitor and manage workflows through the Airflow webserver.

## Requirements

- [Docker-CE](https://www.docker.com/)

## Prerequisites

Before proceeding with the deployment, make sure to complete the following steps:

1. **Update Configuration Files**:
   - **`.env` File**: 
     - Navigate to the [.env](.env) file and update the following parameters:
       - `HOST_IP`: Set this to the IP address of the host machine where the Airflow infrastructure is deployed.
       - `CELERY_WEB_UNAME`: Set this to your desired username for accessing the Celery Flower dashboard.
       - `CELERY_WEB_PSSWD`: Set this to your desired password for the Celery Flower dashboard.
   
   - **Docker Compose File**:
     - Navigate to the [docker-compose.yml](docker-compose.yaml) file and update the following:
       - In the `extra_hosts` section, change the IP address of `remote_worker01` to the IP address of your remote worker machine.
       - If your worker has a different name, replace `remote_worker01` with the correct name of your worker.

2. **SSH Configuration**: 
   - Ensure that SSH keys are generated on all machines that are part of this infrastructure.
   - Add the SSH keys from each machine to the `authorized_keys` file on all other machines in the infrastructure to allow passwordless SSH access.

Once these steps are completed, you can proceed with the deployment process.
### Start The Application.

1. Navigate to the source directory containing the `docker-compose.yml` file.
2. Run the following command:

    ```bash
    docker compose up -d
    ```

### Verify that everything is up and running

Wait for the services to start, then run the following commands:

- Check if the container is running (change `worker_name` with the actual name that you specified in the .env file):

    ```bash
    docker ps --filter name=airflow_core --format "table {{.Image}}\t{{.Names}}"
    ```

    You should see the following output:

    ```bash
    IMAGE                            NAMES
    airflow_core-airflow-triggerer   airflow_core-airflow-triggerer-1
    airflow_core-airflow-webserver   airflow_core-airflow-webserver-1
    airflow_core-flower              airflow_core-flower-1
    airflow_core-airflow-scheduler   airflow_core-airflow-scheduler-1
    postgres:13                      airflow_core-postgres-1
    redis:7.2                        airflow_core-redis-1
    ```


### Make Sure Everything Works

1. **Access the Flower Web App:**
   - Open a browser and navigate to `http://{Your IP}:5555/workers`.
   - Log in using the `celery` credentials you provided in the `.env` file.
   - After successful authentication, you should be redirected to the workers page, confirming that Celery was set up correctly.

2. **Access the Airflow Web App:**
   - Open a browser and go to `http://{Your IP}:8080/home`.
   - Log in using the credentials provided by your organization for Airflow.
   - You should see all the available DAGs listed, confirming that your DAGs folder is properly configured.

#### Stop everything.

Navigate to the source directory and run the following command.

    docker-compose down