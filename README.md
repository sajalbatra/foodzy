# Foodzy 🍽️

Welcome to **Foodzy**, a modern and user-friendly platform for exploring delicious menus, booking tables, and enjoying culinary delights. This project is open-source and aims to offer a delightful restaurant experience through its clean and simple design.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Frontend](#frontend)
  - [Technologies Used](#technologies-used)
  - [Installation & Setup](#installation--setup)
- [Backend](#backend)
  - [Technologies Used](#technologies-used-1)
  - [Installation & Setup](#installation--setup-1)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Overview

**Foodzy** provides a seamless user experience where visitors can explore food menus, read about the restaurant, and even book a table. The platform is designed to be flexible and responsive, ensuring a great experience across all devices.

The project consists of two main components:
- **Frontend**: Built using React and Vite, it handles the user interface, interactions, and client-side logic.
- **Backend**: Built using Node.js and Express, it provides REST APIs for user management, authentication, and more.

## Features

- **Home**: A landing page with an introduction to the restaurant.
- **About**: A section with information about the restaurant's history and mission.
- **Menu**: Explore the restaurant’s various offerings, from appetizers to desserts.
- **Book a Table**: Users can reserve a table directly through the platform.
- **Authentication**: Secure user registration and login using JWT.

---

## Folder Structure

```
└── 📁foodzy
    ├── 📁backend                # Backend code handling APIs and database
    │   ├── 📁controllers        # API controllers
    │   ├── 📁database           # Database connection setup
    │   ├── 📁middlewares        # Middleware for authentication
    │   ├── 📁models             # MongoDB Models
    │   ├── 📁routes             # API routes
    │   ├── .env                 # Environment variables
    │   ├── .env.sample          # Example environment variables file
    │   ├── app.js               # Main backend app entry
    │   └── index.js             # Server setup
    ├── 📁frontend               # Frontend code for user interface
    │   ├── 📁public             # Public assets
    │   ├── 📁src                # Source files for the frontend
    │   ├── 📁components         # Reusable React components
    │   ├── .env                 # Environment variables for frontend
    │   ├── App.tsx              # Main React app file
    │   └── index.html           # Main HTML entry point
    ├── .gitignore               # Git ignore file
    └── package.json             # Project dependencies and scripts
```

## Contribution Guidelines

We welcome contributions to **Foodzy**! Here's how you can help:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Added new feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Submit a pull request**.

Please make sure to follow the code style and conventions used in the project.

