---
layout: page
title: 4. Model Repository Setup
parent: "2. Manual Setup"
permalink: /model-repo/
nav_order: 4
---

# DataCROP Maize Model Repository Deployment

Use this page when following the **manual per-repository setup**. If you use **Maize MVP**, the model repository is deployed by the MVP script; refer here only for customization or troubleshooting. See [Maize Setup](/Setup/) for the two setup options.

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
    WEBSERVER_DAGS_FOLDER=/path/to/maze-processing-engine-airflow/dags
    WORKER_API_PORT=8090

    # Harbor
    HARBOR_URL=harbor.example.com/
    HARBOR_USERNAME=<HARBOR_USERNAME>
    HARBOR_TOKEN=[REDACTED – keep existing value in your .env]

    # MongoDB
    MONGO_INITDB_ROOT_USERNAME=root
    MONGO_INITDB_ROOT_PASSWORD=[REDACTED – keep existing value in your .env]
    MONGO_USERNAME=root
    MONGO_PASSWORD=[REDACTED – keep existing value in your .env]
    MONGO_DATABASE=registry
    MONGO_PORT=27017
    MONGO_HOST=<MONGO_HOST>

    # Kafka
    KAFKA_ENABLED=false
    KAFKA_BOOTSTRAP_SERVERS=<KAFKA_BOOTSTRAP_SERVERS>

    # Logstash
    LOGSTASH_CONFIG_FOLDER=/app/logstash/config/
    LOGSTASH_PIPELINE_FOLDER=/app/logstash/pipeline/

    # Keycloak
    KEYCLOAK_ISSUER_URI=https://keycloak.example.com/realms/YOUR-REALM
    KEYCLOAK_PROVIDER=<KEYCLOAK_PROVIDER>
    KEYCLOAK_CLIENT_NAME=<KEYCLOAK_CLIENT_NAME>
    KEYCLOAK_CLIENT_ID=<KEYCLOAK_CLIENT_ID>
    KEYCLOAK_CLIENT_SECRET=[REDACTED – keep existing value in your .env]
    KEYCLOAK_SCOPE=openid,offline_access,profile,roles
    KEYCLOAK_USER_NAME_ATTR=preferred_username
    KEYCLOAK_JWK_SET_URI=https://keycloak.example.com/realms/YOUR-REALM/protocol/openid-connect/certs

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
    AIRFLOW_BASE_URL=http://<AIRFLOW_HOST>:8080/api/v1
    AIRFLOW_USERNAME=<AIRFLOW_USERNAME>
    AIRFLOW_PASSWORD=[REDACTED – keep existing value in your .env]
    ```

   Sensitive secrets are redacted above; ensure your `.env` retains the real values currently configured.

### Optional: Predefining custom processors (before deploying the editor)

- You can ship extra processor definitions for your project by adding a JSON file at `config/extra-processors.json` in the model repository project. The docker compose mounts it like:
  - `./config/extra-processors.json:/app/config/extra-processors.json:ro`
- The file contains an array of processor definitions. Example:

  ```json
  [
    {
      "name": "custom-logstash",
      "type": "logstash",
      "description": "Moves data from source A to sink B",
      "image": "harbor.example.com/project/logstash-custom:1.0.0",
      "parameters": {
        "input": "digitalResourceIdA",
        "output": "digitalResourceIdB"
      }
    }
  ]
  ```

- Workflow: place your JSON file, deploy the Model Repository, deploy the Workflow Editor, then log in and click **Initialize resources** (see [Workflow Editor Setup](/editor/)). The initialization step loads this file and creates both the default and any extra processors you defined.

Once these parameters are correctly set, you can proceed with the deployment

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

