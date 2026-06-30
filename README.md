# Todo App

A simple Todo application built using Node.js and Docker.

## Features

- Add Todo
- Delete Todo
- Dockerized Application

## Tech Stack

- Node.js
- Docker

## Installation

```bash
npm install
npm start
```

## Docker

### Build Image

```bash
docker build -t todo-app .
```

### Run Container

```bash
docker run -p 8080:8080 todo-app
```

Visit:

http://localhost:8080

## Project Structure

```
todo-app/
│
├── app/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Dockerfile
├── package.json
├── server.js
└── README.md
```
