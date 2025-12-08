---
layout: page
title: Maize Setup
permalink: /Setup/
nav_order: 2
---

# DataCROP Maize Workflow Management Engine Deployment

You can set up the Maize stack in two ways:

1. **Maize MVP (recommended)** — a single repository and script that brings up all Maize components together. Start here if you want the fastest path to a working demo.
2. **Manual per-repository setup** — deploy each component yourself (Keycloak, Airflow, Worker, Model Repository, Workflow Editor) for fine-grained control.

Use the MVP path if you want a quick, reproducible deployment. Choose the manual path if you need to customize each service, change infrastructure details, or operate components independently.

## Option 1: Maize MVP (single script)

Follow the instructions in the [Maize MVP Setup page](/mvp/) to configure the env files in each component folder of the MVP repository and run the one-shot setup script.

## Option 2: Manual per-repository setup

If you prefer to deploy each component separately, follow these pages in order:
- [Keycloak Setup](/keycloak/)
- [Airflow Setup](/airflow/)
- [Worker Setup](/worker/)
- [Model Repository Setup](/model-repo/)
- [Workflow Editor Setup](/editor/)

You can still reference the manual pages even when using the MVP path to understand what each service does and what each environment variable controls.

