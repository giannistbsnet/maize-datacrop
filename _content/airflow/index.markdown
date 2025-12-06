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

1. Navigate to the [`.env` file](.env) and ensure that all necessary environment variables are set correctly for your deployment. Current values from `maze-processing-engine-airflow/.env` are shown below; sensitive secrets are redacted—keep using the real values already present in your `.env`.

    ```plaintext
    # AIRFLOW USERS     ||  DC.C
    AIRFLOW_UID=1002
    DOCKER_GID=988
    AIRFLOW_WEB_PORT=8080
    AIRFLOW_WWW_UNAME_USERNAME='airflow'
    AIRFLOW_WEB_PSSWD=[REDACTED – keep existing value in your .env]
    AIRFLOW_WEB_SSL_CERT=/security/airflow/airflow.pem
    AIRFLOW_WEB_SSL_KEY=/security/airflow/airflow-key.pem
    AIRFLOW_CA_CERT=/security/ca/rootCA.pem
    AIRFLOW_WEB_SECRET_KEY=[REDACTED – keep existing value in your .env]
    AIRFLOW_FERNET_KEY=[REDACTED – keep existing value in your .env]

    # HOST              ||  DC.C
    HOST_IP=167.235.128.77
    # WORKER_NAME=worker01

    # REDIS             ||  DC.C
    REDIS_TLS_PORT=6379
    REDIS_TLS_CERT_FILE=/security/redis/redis.pem
    REDIS_TLS_KEY_FILE=/security/redis/redis-key.pem
    REDIS_TLS_CA_CERT_FILE=/security/ca/rootCA.pem
    REDIS_TLS_CLIENT_CERT_FILE=/security/redis/redis-client.pem
    REDIS_TLS_CLIENT_KEY_FILE=/security/redis/redis-client-key.pem

    # POSTGRES          ||  DC.C
    POSTGRES_PORT=5432
    POSTGRES_SSL_CERT_FILE=/security/postgres/postgres.pem
    POSTGRES_SSL_KEY_FILE=/security/postgres/postgres-key.pem
    POSTGRES_SSL_CA_FILE=/security/ca/rootCA.pem

    # Celery            ||  DC.C
    CELERY_WEB_UNAME=[REDACTED – keep existing value in your .env]
    CELERY_WEB_PSSWD=[REDACTED – keep existing value in your .env]
    CELERY_FLOWER_PORT=5555
    CELERY_FLOWER_CERT=/security/flower/flower.pem
    CELERY_FLOWER_KEY=/security/flower/flower-key.pem
    CELERY_FLOWER_CA_CERT=/security/ca/rootCA.pem

    REMOTE_WORKER_NAME=remote_worker01
    REMOTE_WORKER_IP=167.235.128.77
    ```

   Sensitive secrets are redacted above; ensure your `.env` retains the real values currently configured.

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