---
layout: page
title: "2. Airflow Setup"
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

After completing the setup, follow these steps to configure your environment variables:

1. Navigate to the [`.env` file](.env) and ensure that all necessary environment variables are set correctly for your deployment. Update the file with the correct values for your infrastructure by filling in the following parameters:

    ```plaintext
    # AIRFLOW USERS     ||  DC.C
    AIRFLOW_UID=<YOUR_AIRFLOW_UID>
    DOCKER_GID=<YOUR_DOCKER_GID>
    AIRFLOW_WEB_PORT=<YOUR_AIRFLOW_WEB_PORT>
    AIRFLOW_WWW_UNAME_USERNAME=<YOUR_AIRFLOW_WWW_UNAME_USERNAME>
    AIRFLOW_WEB_PSSWD=<YOUR_AIRFLOW_WEB_PSSWD>
    AIRFLOW_WEB_SSL_CERT=<YOUR_AIRFLOW_WEB_SSL_CERT>
    AIRFLOW_WEB_SSL_KEY=<YOUR_AIRFLOW_WEB_SSL_KEY>
    AIRFLOW_CA_CERT=<YOUR_AIRFLOW_CA_CERT>
    AIRFLOW_WEB_SECRET_KEY=<YOUR_AIRFLOW_WEB_SECRET_KEY>
    AIRFLOW_FERNET_KEY=<YOUR_AIRFLOW_FERNET_KEY>

    # HOST              ||  DC.C
    HOST_IP=<YOUR_HOST_IP>
    # WORKER_NAME=<YOUR_WORKER_NAME>

    # REDIS             ||  DC.C
    REDIS_TLS_PORT=<YOUR_REDIS_TLS_PORT>
    REDIS_TLS_CERT_FILE=<YOUR_REDIS_TLS_CERT_FILE>
    REDIS_TLS_KEY_FILE=<YOUR_REDIS_TLS_KEY_FILE>
    REDIS_TLS_CA_CERT_FILE=<YOUR_REDIS_TLS_CA_CERT_FILE>
    REDIS_TLS_CLIENT_CERT_FILE=<YOUR_REDIS_TLS_CLIENT_CERT_FILE>
    REDIS_TLS_CLIENT_KEY_FILE=<YOUR_REDIS_TLS_CLIENT_KEY_FILE>

    # POSTGRES          ||  DC.C
    POSTGRES_PORT=<YOUR_POSTGRES_PORT>
    POSTGRES_SSL_CERT_FILE=<YOUR_POSTGRES_SSL_CERT_FILE>
    POSTGRES_SSL_KEY_FILE=<YOUR_POSTGRES_SSL_KEY_FILE>
    POSTGRES_SSL_CA_FILE=<YOUR_POSTGRES_SSL_CA_FILE>

    # Celery            ||  DC.C
    CELERY_WEB_UNAME=<YOUR_CELERY_WEB_UNAME>
    CELERY_WEB_PSSWD=<YOUR_CELERY_WEB_PSSWD>
    CELERY_FLOWER_PORT=<YOUR_CELERY_FLOWER_PORT>
    CELERY_FLOWER_CERT=<YOUR_CELERY_FLOWER_CERT>
    CELERY_FLOWER_KEY=<YOUR_CELERY_FLOWER_KEY>
    CELERY_FLOWER_CA_CERT=<YOUR_CELERY_FLOWER_CA_CERT>

    REMOTE_WORKER_NAME=<YOUR_REMOTE_WORKER_NAME>
    REMOTE_WORKER_IP=<YOUR_REMOTE_WORKER_IP>
    ```

   Replace all placeholder values (e.g., `<YOUR_AIRFLOW_UID>`, `<YOUR_HOST_IP>`, etc.) with the actual values for your infrastructure. 

Once these parameters are correctly set, you can proceed with the deployment.
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
    docker ps --filter name=airflow --format "table {% raw %}{{.Image}}{% endraw %}\t{% raw %}{{.Names}}{% endraw %}"
    ```

    You should see the following output:

    ```bash
    IMAGE                            NAMES
    airflow-airflow-triggerer        airflow-airflow-triggerer-1
    airflow-airflow-webserver        airflow-airflow-webserver-1
    airflow-flower                   airflow-flower-1
    airflow-airflow-scheduler        airflow-airflow-scheduler-1
    postgres:13                      airflow-postgres-1
    redis:7.2                        airflow-redis-1
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