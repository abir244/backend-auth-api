# Backend Auth API

A local REST API prototype for user registration and login. It uses Node.js and Express to handle requests and Mongoose to store user records in MongoDB.

## Getting started

Install Node.js, npm, and set up a local or hosted MongoDB instance. From the project directory, install the dependencies.

```bash
npm install
```

Create a `.env` file in the project root. Use a test database and update the connection URI for your environment.

```dotenv
MONGODB_URI=mongodb://127.0.0.1:27017/backend_auth
PORT=4000
```

Start the development server with automatic restart on file changes.

```bash
npm run dev
```

Use `npm start` to run without automatic restart. The server defaults to port `4000`.

## API endpoints

Send JSON request bodies with `Content-Type: application/json`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/ping` | Returns `pong` when the HTTP server is responding. |
| `POST` | `/api/v1/users/register` | Creates a user from `name`, `email`, and `password`. Returns `201` on success. |
| `POST` | `/api/v1/users/login` | Checks `email` and `password`. Returns `200` on success. |
| `GET` | `/api/v1/users` | Returns all user records. |

## Local development only

Use disposable test credentials. The current implementation stores passwords in plaintext and returns them in user responses. Login checks credentials without issuing a session or token, and the user listing is publicly accessible wherever the server is reachable.

Before deploying, hash passwords, exclude password fields from responses, and require authentication and authorization for the user listing. Keep `.env` and `node_modules/` out of version control.
