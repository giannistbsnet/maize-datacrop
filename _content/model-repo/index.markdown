---
layout: page
title: 4. Model Repository Setup
parent: Maize Setup
permalink: /model-repo/
nav_order: 4
---

# DataCROP Maize Model Repository Deployment

This is a demo deployment instance for the **Maize DataCROP version**. It deploys the **DataCROP Model Repository infrastructure**, consisting of two containers.

### Requirements

- [Docker-CE](https://www.docker.com/)


### Prerequisites

Before proceeding, make sure you have completed the following steps:

1. **Airflow Setup**:
   - Ensure that you have followed the setup instructions for both the [Airflow Processing Engine](https://github.com/datacrop/maze-processing-engine-airflow) and the [Processing Engine Worker](https://github.com/datacrop/maze-processing-engine-worker). These components need to be properly configured and running before deploying the Maize DataCROP Model Repository.

After completing the setup, follow these steps to configure your environment variables:

1. Navigate to your environment variable file (e.g., `.env` or the relevant configuration file for your deployment).
2. Update the file with the correct values for your infrastructure. Below are the current values from `maize-model-repository/.env` and `docker-compose.yml`; sensitive secrets are redacted—keep using the real values already present in your `.env`.

    ```plaintext
    # Application
    SERVER_PORT=9090
    MAX_FILE_SIZE=200MB
    MAX_REQUEST_SIZE=500MB

    # Workflow Management Engine
    VM_WME_IP=<YOUR_IP>
    VM_WORKER_IP=<YOUR_IP>
    WEBSERVER_DAGS_FOLDER=/home/itampaki/maze-processing-engine-airflow/dags
    WORKER_API_PORT=8090

    # Harbor
    HARBOR_URL=harbor.modul4r.rid-intrasoft.eu/
    HARBOR_USERNAME=giannistbsnet
    HARBOR_TOKEN=[REDACTED – keep existing value in your .env]

    # MongoDB
    MONGO_INITDB_ROOT_USERNAME=root
    MONGO_INITDB_ROOT_PASSWORD=[REDACTED – keep existing value in your .env]
    MONGO_USERNAME=root
    MONGO_PASSWORD=[REDACTED – keep existing value in your .env]
    MONGO_DATABASE=registry
    MONGO_PORT=27017
    MONGO_HOST=167.235.128.77

    # Kafka
    KAFKA_ENABLED=false
    KAFKA_BOOTSTRAP_SERVERS=167.235.128.77:9092

    # Logstash
    LOGSTASH_CONFIG_FOLDER=/app/logstash/config/
    LOGSTASH_PIPELINE_FOLDER=/app/logstash/pipeline/

    # Keycloak
    KEYCLOAK_ISSUER_URI=https://keycloak.modul4r.rid-intrasoft.eu/realms/MODUL4R-Platform
    KEYCLOAK_PROVIDER=MODUL4R-Platform
    KEYCLOAK_CLIENT_NAME=modul4r-back
    KEYCLOAK_CLIENT_ID=modul4r-back
    KEYCLOAK_CLIENT_SECRET=[REDACTED – keep existing value in your .env]
    KEYCLOAK_SCOPE=openid,offline_access,profile,roles
    KEYCLOAK_USER_NAME_ATTR=preferred_username
    KEYCLOAK_JWK_SET_URI=https://keycloak.modul4r.rid-intrasoft.eu/realms/MODUL4R-Platform/protocol/openid-connect/certs

    # Elastic Stack
    ELASTIC_VERSION=8.15.3
    ELASTIC_PASSWORD=[REDACTED – keep existing value in your .env]
    LOGSTASH_INTERNAL_PASSWORD=[REDACTED – keep existing value in your .env]
    KIBANA_SYSTEM_PASSWORD=[REDACTED – keep existing value in your .env]
    METRICBEAT_INTERNAL_PASSWORD=[REDACTED – keep existing value in your .env]
    FILEBEAT_INTERNAL_PASSWORD=[REDACTED – keep existing value in your .env]
    HEARTBEAT_INTERNAL_PASSWORD=[REDACTED – keep existing value in your .env]
    MONITORING_INTERNAL_PASSWORD=[REDACTED – keep existing value in your .env]
    BEATS_SYSTEM_PASSWORD=[REDACTED – keep existing value in your .env]

    # Airflow (WME integration)
    AIRFLOW_BASE_URL=http://167.235.128.77:8080/api/v1
    AIRFLOW_USERNAME=airflow
    AIRFLOW_PASSWORD=[REDACTED – keep existing value in your .env]
    ```

   Sensitive secrets are redacted above; ensure your `.env` retains the real values currently configured.

Once these parameters are correctly set, you can proceed with the deployment.

1. **Configuration Adjustments**:
   - Clone the repository and navigate to the [application.properties](maize-model-repository/model-repository-server/src/main/resources/application.properties) file and review the following parameters. Adjust them as necessary to match your environment:
     - `VM.wme.ip`: Set the IP address of the WME (Workflow Management Engine).
     - `VM.worker.ip`: Set the IP address of the Processing Engine Worker.
     - `remote.host.wme`: Specify the remote host address for the WME.
     - `remote.host.worker`: Specify the remote host address for the Processing Engine Worker.
     - `webserver.dags.folder`: Path to the DAGs folder on the web server.
     - `worker.dags.folder`: Path to the DAGs folder on the worker.
     - `spring.data.mongodb.host`: Specify the IP address of the machine that hosts mongodb.
     - `spring.kafka.bootstrap-servers`: Specify the IP address of the kafka bootstrap server.

   - Also, it’s recommended to review the [docker-compose.yml](maize-model-repository/docker-compose.yml) file. Modify any parameters as needed to ensure compatibility with your specific setup.

2. **SSH Key Configuration**:
   - Make sure that all the machines participating in this infrastructure have SSH keys generated. Each machine should have the public SSH keys of all other machines added to its `~/.ssh/authorized_keys` file. This is essential for secure and seamless communication between the components.

Once these prerequisites are met, you can proceed with the deployment steps.


### Starting the Application

1. Navigate to the source directory containing the `Dockerfile` and `docker-compose.yml` files.
2. Run the following commands:

    ```bash
    docker build -t wme .
    
    docker compose up -d
    ```

### Verifying the Deployment

Wait for the services to start, then run the following commands:

1. Check if the WME container is running:

    ```bash
    docker ps --filter name=wme-container --format "table {% raw %}{{.Image}}{% endraw %}\t{% raw %}{{.Names}}{% endraw %}"
    ```

    You should see the following output:

    ```bash
    IMAGE                                        NAMES
    wme                                          wme-container
    ```

2. Check if the MongoDB container is running:

    ```bash
    docker ps --filter name=mongo --format "table {% raw %}{{.Image}}{% endraw %}\t{% raw %}{{.Names}}{% endraw %}"
    ```

    You should see the following output:

    ```bash
    IMAGE                                        NAMES
    mongo:latest                                 mongodb-container
    ```

### Stopping the Application

To stop the containers, run the following command:

```bash
docker-compose down
```
### Clean everything up.

Run the following command (**at your own risk**).

    docker-compose down --volumes --remove-orphans