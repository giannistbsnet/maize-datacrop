---
layout: page
title: "1. Keycloak Setup"
parent: "2. Manual Setup"
permalink: /keycloak/
nav_order: 1
---

# Keycloak Authentication Setup

Use this page for the **manual per-repository setup**. That path assumes you configure Keycloak before deploying the other components. If you are using the **Maize MVP** path, Keycloak is provisioned/configured automatically; consult this page only if you need to customize it. See [Maize Setup](/Setup/) for the two setup options.

This page will guide you through the steps required to set up Keycloak for the entire service. You will need to configure three Keycloak clients: one for the frontend, one for the backend, and one for the wrapper. Ensure you have administrator access to Keycloak to follow these steps.

## Prerequisites

Before starting, ensure you have:
- Access to the Keycloak Administrator UI.
- Administrator privileges to create and configure realms, clients, and roles.
  
## Steps

### 1. Log in as an Administrator

1. Access your Keycloak instance through the administrator URL.
2. Log in using your administrator credentials.

### 2. Create a New Realm

1. In the Keycloak UI, select **Add Realm**.
2. Provide a name for your realm (e.g., `my-realm`).
3. Save the new realm.

### 3. Configure the Frontend Client

1. **Create a Client**:
   - Navigate to **Clients** > **Create**.
   - Name the client (e.g., `frontend-client`).
   - In the **Root URL**, **Admin URL**, and **Base URL**, use your own machine's IP (placeholder shown below):
     ```json
     "rootUrl": "http://YOUR_IP",
     "adminUrl": "http://YOUR_IP",
     "baseUrl": "http://YOUR_IP",
     ```
   - Update the **Redirect URIs**:
     ```json
     "redirectUris": [
       "http://YOUR_IP:5173/MainPage",
       "http://YOUR_IP:5173/login",
       "http://YOUR_IP:5173/*",
       "http://YOUR_IP:5114/*",
       "http://YOUR_IP:5173/MainPage/Lab"
     ]
     ```
   - Update the **Web Origins**:
     ```json
     "webOrigins": [
       "/*",
       "http://YOUR_IP:5173",
       "http://YOUR_IP:5173/*",
       "http://YOUR_IP:5114/*"
     ]
     ```
   - For **Post Logout Redirect URIs**, use:
     ```json
     "post.logout.redirect.uris": "http://YOUR_IP:5173/*##http://YOUR_IP:5173/login##http://YOUR_IP:5114/*"
     ```

2. **Configure Client Settings**:
   - Disable **Client Authentication** and **Authorization**.
   - Enable **Standard Flow** and **Direct Access Grants**.

3. **Assign Roles**:
   - Go to the **Roles** tab and add `admin` and `user` roles.

4. **Create a Frontend-Dedicated Client Scope**:
   - Navigate to **Client Scopes** and ensure there is a frontend-dedicated scope.

### 4. Configure the Backend Client

1. **Create a Client**:
   - Name the client (e.g., `backend-client`).
   - In the **Authenticator Type**, choose **Client-Secret**.
   - Save the generated secret for later use.

2. **Configure URLs**:
   - Set the following URLs for the backend:
     ```json
     "rootUrl": "http://YOUR_IP:9090",
     "adminUrl": "",
     "baseUrl": "http://YOUR_IP:9090",
     "redirectUris": [
       "http://YOUR_IP:9090/*"
     ],
     "webOrigins": [
       ""
     ]
     ```

3. **Configure Client Settings**:
   - Enable **Client Authentication** and **Authorization**.
   - Enable **Standard Flow**, **Implicit Flow**, and **Direct Access Grants**.

4. **Assign Roles**:
   - Go to the **Roles** tab and add `admin` and `user` roles.

5. **Create a Backend-Dedicated Client Scope**:
   - Navigate to **Client Scopes** and ensure there is a backend-dedicated scope.

### 5. Configure the Wrapper Client

1. **Create a Client**:
   - Name the client (e.g., `wrapper-client`).
   - No need to configure any URLs for this client.

2. **Configure Client Settings**:
   - Enable **Client Authentication**.
   - Enable **Standard Flow**, **Direct Access Grants**, and **Service Accounts Roles**.

3. **Assign Roles**:
   - Add `admin` roles to the client.

4. **Create a Wrapper-Dedicated Client Scope**:
   - Ensure there is a wrapper-dedicated client scope.

### 6. Configure Realm Roles

1. **Verify Default Roles**:
   - Go to the **Roles** section of the realm.
   - Ensure that there is a role named `default-roles`.

### 7. Create the Admins Group

1. **Create a Group**:
   - Navigate to the **Groups** section.
   - Create a group named `admins`.

2. **Assign Roles to the Admins Group**:
   - In the **Role Mappings** tab of the group, assign roles related to the frontend and backend services.

### 8. Create Users and Assign Roles

1. **Create a User**:
   - Navigate to the **Users** section.
   - Create a new user, providing the required information.
   
2. **Set Password**:
   - After creating the user, navigate to the **Credentials** tab.
   - Set a password for the user.

3. **Assign Roles to the User**:
   - In the **Role Mappings** tab of the user, assign the `default-roles` role.

4. **Add User to Admins Group**:
   - Go to the **Groups** tab and make the user join the `admins` group.

### 9. Adjust Realm Settings

1. **Session and Token Settings**:
   - Navigate to the **Realm Settings** section.
   - Adjust session duration settings and token settings according to the service's security requirements.

### Final Steps

- After configuring all clients, ensure that each client is properly assigned its dedicated scope and roles.
- You can verify the configuration by testing the login and authentication flows for the frontend, backend, and wrapper components.

