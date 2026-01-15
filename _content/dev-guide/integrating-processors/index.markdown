---
layout: page
title: Integrating Custom Processors
parent: Developer Guide
permalink: /integrating-processors/
nav_order: 1
---

# Integrating Custom Processors

## Overview

A processor is a runnable service in a WME workflow. Integrating one means packaging it so WME can start it and inject data connection settings from user-selected digital resources. This page defines the packaging contract and the WME-compatible env var convention for data I/O.

## Packaging requirements

### Folder layout example

```plaintext
my-processor/
├─ docker-compose.yml
├─ .env.example
└─ app/
   └─ ...
```

### docker-compose.yml best practices

- Read configuration from env vars instead of hardcoding endpoints.
- Keep secrets out of git; use `.env` locally and `.env.example` for documentation.
- Keep the compose file focused on running the service, not provisioning infrastructure.

### .env as the runtime contract

Your `.env` (or `.env.example`) lists every value a deployer may need to configure at runtime. Treat this as the interface between WME and your container: every WME-injected data input or output should be represented by an env var documented here.

You can also define app-specific env vars alongside the data-source ones. WME only auto-injects the data-resource variables when using the editor wiring; the rest remain user-configurable.

## Digital resources and data interface types

A digital resource is an instantiated data source or sink with parameter values. Each digital resource is based on a data interface type, which defines the required parameter keys (for example, `kafka.bootstrap_servers` and `kafka.topic_id`). Users create these in the Warehouse and assign them as workflow inputs and outputs in the Lab. When a processor is assigned a digital resource as its data input or output, WME injects the corresponding env vars at runtime.

For more detail, see:
- [Creating Data Models](/creating-data-models/) (digital resources and interface types)
- [Creating Workflows](/creating-workflows/) (assigning data input/output)

If you rely on the default interface types seeded by the Model Repository, see [Model Repository Setup](/model-repo/) for the current list and keys.

## WME compatibility env var convention

WME passes digital resource parameters into your container using a consistent env var naming rule:

`<INTERFACE>_<KEY>_<DIRECTION>`

Normalization rules:
- `<INTERFACE>` is the uppercase data interface type name (for example, `kafka` becomes `KAFKA`).
- `<KEY>` is the uppercase parameter key with non-alphanumerics converted to `_` (for example, `bootstrap_servers` becomes `BOOTSTRAP_SERVERS`).
- `<DIRECTION>` is `INPUT` for parameters consumed by your processor and `OUTPUT` for parameters written by your processor.

Direction rules:
- Use `_INPUT` for values read from the selected input digital resource.
- Use `_OUTPUT` for values written to the selected output digital resource.
- If your processor can be used for either direction, expose both input and output variants for shared connection fields.

**Note**: This env var convention is the WME compatibility interface for processor integrations, even as runtime wiring evolves. Implement it now to stay compatible with the visual editor workflow.

## Examples from default interface types

### Kafka input

```plaintext
KAFKA_BOOTSTRAP_SERVERS_INPUT=...
KAFKA_TOPIC_ID_INPUT=...
```

### Kafka output

```plaintext
KAFKA_BOOTSTRAP_SERVERS_OUTPUT=...
KAFKA_TOPIC_ID_OUTPUT=...
```

### RabbitMQ input and output

```plaintext
RABBITMQ_HOST_INPUT=...
RABBITMQ_PORT_INPUT=...
RABBITMQ_USER_INPUT=...
RABBITMQ_PASSWORD_INPUT=...
RABBITMQ_QUEUE_INPUT=...

RABBITMQ_HOST_OUTPUT=...
RABBITMQ_PORT_OUTPUT=...
RABBITMQ_USER_OUTPUT=...
RABBITMQ_PASSWORD_OUTPUT=...
RABBITMQ_EXCHANGE_OUTPUT=...
RABBITMQ_EXCHANGE_TYPE_OUTPUT=...
RABBITMQ_VHOST_OUTPUT=...
```

## Compatibility checklist

- Package the processor as a folder with your app, `docker-compose.yml`, and `.env` or `.env.example`.
- Ensure `docker-compose.yml` reads configuration from env vars, not hardcoded endpoints.
- Expose WME-compatible env vars using the `<INTERFACE>_<KEY>_<DIRECTION>` pattern.
- Provide both input and output variants when your processor supports either direction.
- Document the interface types and keys your processor expects, matching the Model Repository definitions.
