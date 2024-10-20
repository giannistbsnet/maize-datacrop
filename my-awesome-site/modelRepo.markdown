---
layout: page
title: 3. Model Repository Setup
parent: Maize Setup
permalink: /model-repo/
nav_order: 4
---

## DataCROP Maize Model Repository Deployment

This is a demo deployment instance for the **Maize DataCROP version**. It deploys the **DataCROP Model Repository infrastructure**, consisting of two containers.

### Requirements

- [Docker-CE](https://www.docker.com/)


### Prerequisites

Before proceeding, make sure you have completed the following steps:

1. **Airflow Setup**:
   - Ensure that you have followed the setup instructions for both the [Airflow Processing Engine](https://github.com/datacrop/maze-processing-engine-airflow) and the [Processing Engine Worker](https://github.com/datacrop/maze-processing-engine-worker). These components need to be properly configured and running before deploying the Maize DataCROP Model Repository.

2. **Configuration Adjustments**:
   - Clone the repository and navigate to the [application.properties](maize-model-repository/model-repository-server/src/main/resources/application.properties) file and review the following parameters. Adjust them as necessary to match your environment:
     - `VM.wme.ip`: Set the IP address of the WME (Workflow Management Engine).
     - `VM.worker.ip`: Set the IP address of the Processing Engine Worker.
     - `remote.host.wme`: Specify the remote host address for the WME.
     - `remote.host.worker`: Specify the remote host address for the Processing Engine Worker.
     - `webserver.dags.folder`: Path to the DAGs folder on the web server.
     - `worker.dags.folder`: Path to the DAGs folder on the worker.
     - `spring.data.mongodb.host`: Specify the IP adress of the machine that hosts mongodb.
     - `spring.kafka.bootstrap-servers`: Specify the IP adress of the kafka bootstrap server.

   - Also, it’s recommended to review the [docker-compose.yml](maize-model-repository/docker-compose.yml) file. Modify any parameters as needed to ensure compatibility with your specific setup.

3. **SSH Key Configuration**:
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
    docker ps --filter name=wme-container --format "table {{.Image}}\t{{.Names}}"
    ```

    You should see the following output:

    ```bash
    IMAGE                                        NAMES
    wme                                          wme-container
    ```

2. Check if the MongoDB container is running:

    ```bash
    docker ps --filter name=mongo --format "table {{.Image}}\t{{.Names}}"
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