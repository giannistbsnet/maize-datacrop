---
layout: page
title: Developer Guide
permalink: /dev-guide/
nav_order: 4
has_children: true
---

# DataCROP Maize Workflow Management Engine Developer Guide

The Workflow Management Engine (WME) is the DataCROP Maize application for modeling workflows and running processors. This guide focuses on developer-facing integration points, especially how to package processors and connect them to WME data inputs and outputs.

## Who this guide is for

- Developers integrating custom processors into WME workflows.
- Teams packaging services with `docker-compose.yml` and runtime `.env` configuration.
- Engineers wiring processors to WME digital resources for data input and output.

## What you'll learn

- What "processor integration" means in WME: a packaging contract plus a data I/O compatibility contract.
- How to expose WME-compatible env vars derived from data interface types.
- Where to find user-guide context on digital resources and workflow wiring.

## Developer guide map

- [Integrating Custom Processors](/integrating-processors/): packaging requirements and WME-compatible data I/O env vars.
- Processor definitions and Model Repository defaults (planned).
- Workflow execution and worker deployment integration points (planned).
- API and automation hooks (planned).
