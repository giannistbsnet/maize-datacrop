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
2. Update the file with the correct values for your infrastructure. Current values from `maze-workflow-management-editor/.env` are:

    ```plaintext
    VITE_API_URL=http://167.235.128.77:9090
    VITE_BACKEND_IP=167.235.128.77
    VITE_AIRFLOW_IP=167.235.128.77
    VITE_KEYCLOAK_URL=https://keycloak.modul4r.rid-intrasoft.eu/
    VITE_KEYCLOAK_REALM=MODUL4R-Platform
    VITE_KEYCLOAK_CLIENT_ID=modul4r-front
    VITE_PROJECT_NAME=MODUL4R
    VITE_DEFAULT_PRIMARY_COLOR=#DA3333
    ```

   Adjust the above values only if your deployment differs (e.g., different host IP or Keycloak realm). No secrets are stored in this file.


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
