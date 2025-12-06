---
layout: page
title: 5. Workflow Editor Setup
parent: Maize Setup
permalink: /editor/
nav_order: 5
---

# DataCROP Maize Workflow Management Editor Deployment
This is a demo deployment instance for the **Maize DataCROP version**. It deploys the **DataCROP Workflow Management Engine** web application for creating and managing workflows. The deployment consists of a single container.


### Prerequisites

Before proceeding, ensure you have completed the setup instructions for the [Maize Model Repository](https://github.com/datacrop/maize-model-repository).

After completing the setup, follow these steps to configure your environment variables:

1. Navigate to the [`.env`](./ui/.env) file in the `ui` directory.
2. Update the file with the correct values for your infrastructure by filling in the following parameters:

    ```plaintext
    VITE_API_URL=http://<YOUR_HOST_IP>:9090
    VITE_BACKEND_IP=<YOUR_HOST_IP>
    VITE_AIRFLOW_IP=<YOUR_HOST_IP>
    VITE_KEYCLOAK_URL=<YOUR_KEYCLOAK_URL>
    VITE_KEYCLOAK_REALM=<YOUR_KEYCLOAK_REALM>
    VITE_KEYCLOAK_CLIENT_ID=<YOUR_KEYCLOAK_CLIENT_ID>
    ```

   Replace `<YOUR_HOST_IP>`, `<YOUR_KEYCLOAK_URL>`, `<YOUR_KEYCLOAK_REALM>`, and `<YOUR_KEYCLOAK_CLIENT_ID>` with the actual values for your Maize Model Repository and Keycloak infrastructure. Example values:


Once these parameters are correctly set, you can proceed with the deployment.

### REQUIREMENTS

- [Docker-CE](https://www.docker.com/)

### Start The Application.

1. Clone the repository and navigate to the source directory containing the `docker-compose.yml` file.
2. Run the following command:

    ```bash
    docker compose up -d
    ```


### Verify that everything is up and running

Wait for the services to start, then run the following commands:

1. Check if the container is running:

    ```bash
    docker ps --filter name=wme-ui --format "table {% raw %}{{.Image}}{% endraw %}\t{% raw %}{{.Names}}{% endraw %}"
    ```

    You should see the following output:

    ```bash
    IMAGE                                        NAMES
    node:lts-alpine                              wme-ui
    ```

2. Check if the network is set up correctly:

    ```bash
    docker network ls --filter name="maze-workflow-management-editor_wme-network" --format "table {% raw %}{{.Name}}{% endraw %}\t{% raw %}{{.Driver}}{% endraw %}\t{% raw %}{{.Scope}}{% endraw %}"
    ```

    Ensure the output matches the following:

    ```bash
    NAME                                          DRIVER    SCOPE
    maze-workflow-management-editor_wme-network   bridge    local
    ```


#### Make Sure Everything Works

1. Open a browser and navigate to the [web application](http://195.201.222.205:5173/MainPage/Warehouse).
2. You will be redirected to the Keycloak authentication page. Enter the credentials provided by your organization.
3. After successful authentication, you will be redirected to the main page of the workflow management engine, where you can begin creating and managing workflows.


#### Stop everything.

Navigate to the source directory and run the following command.

    docker-compose down
