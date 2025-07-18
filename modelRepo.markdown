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
2. Update the file with the correct values for your infrastructure by filling in the following parameters:

    ```plaintext
    # MongoDB
    MONGO_INITDB_ROOT_USERNAME=<YOUR_MONGO_ROOT_USERNAME>
    MONGO_INITDB_ROOT_PASSWORD=<YOUR_MONGO_ROOT_PASSWORD>

    # Application
    SERVER_PORT=<YOUR_SERVER_PORT>

    # File size limits
    MAX_FILE_SIZE=<YOUR_MAX_FILE_SIZE>
    MAX_REQUEST_SIZE=<YOUR_MAX_REQUEST_SIZE>

    # Workflow Management Engine
    DAGS_FOLDER=<YOUR_DAGS_FOLDER>
    VM_WME_IP=<YOUR_WME_IP>
    VM_WORKER_IP=<YOUR_WORKER_IP>
    REMOTE_HOST_WME=<YOUR_REMOTE_HOST_WME>
    REMOTE_HOST_WORKER=<YOUR_REMOTE_HOST_WORKER>
    WEBSERVER_DAGS_FOLDER=<YOUR_WEBSERVER_DAGS_FOLDER>
    WORKER_DAGS_FOLDER=<YOUR_WORKER_DAGS_FOLDER>

    # Harbor
    HARBOR_URL=<YOUR_HARBOR_URL>
    HARBOR_USERNAME=<YOUR_HARBOR_USERNAME>
    HARBOR_TOKEN=<YOUR_HARBOR_TOKEN>

    # MongoDB
    MONGO_USERNAME=<YOUR_MONGO_USERNAME>
    MONGO_PASSWORD=<YOUR_MONGO_PASSWORD>
    MONGO_DATABASE=<YOUR_MONGO_DATABASE>
    MONGO_PORT=<YOUR_MONGO_PORT>
    MONGO_HOST=<YOUR_MONGO_HOST>

    # Kafka
    KAFKA_BOOTSTRAP_SERVERS=<YOUR_KAFKA_BOOTSTRAP_SERVERS>

    # Logstash
    LOGSTASH_CONFIG_FOLDER=<YOUR_LOGSTASH_CONFIG_FOLDER>
    LOGSTASH_PIPELINE_FOLDER=<YOUR_LOGSTASH_PIPELINE_FOLDER>

    # Keycloak
    KEYCLOAK_ISSUER_URI=<YOUR_KEYCLOAK_ISSUER_URI>
    KEYCLOAK_PROVIDER=<YOUR_KEYCLOAK_PROVIDER>
    KEYCLOAK_CLIENT_NAME=<YOUR_KEYCLOAK_CLIENT_NAME>
    KEYCLOAK_CLIENT_ID=<YOUR_KEYCLOAK_CLIENT_ID>
    KEYCLOAK_CLIENT_SECRET=<YOUR_KEYCLOAK_CLIENT_SECRET>
    KEYCLOAK_SCOPE=<YOUR_KEYCLOAK_SCOPE>
    KEYCLOAK_USER_NAME_ATTR=<YOUR_KEYCLOAK_USER_NAME_ATTR>
    KEYCLOAK_JWK_SET_URI=<YOUR_KEYCLOAK_JWK_SET_URI>
    ```

   Replace all placeholder values (e.g., `<YOUR_MONGO_ROOT_USERNAME>`, `<YOUR_WME_IP>`, etc.) with the actual values for your infrastructure. Example values:

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