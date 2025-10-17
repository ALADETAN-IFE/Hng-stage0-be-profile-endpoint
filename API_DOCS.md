# 📘 API Documentation — HNG Stage 0 Backend (Dynamic Profile Endpoint)

This API returns a JSON response containing user profile information, a random cat fact, and a dynamic UTC timestamp.

---

## Endpoint

### GET /me

Description
: Returns profile information along with a random cat fact fetched from the Cat Facts API (https://catfact.ninja/fact).

---

## Response Format

Example (successful) JSON response:

```json
{
  "status": "success",
  "user": {
    "email": "your-email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

## Details

| Field      | Type   | Description                                                |
| ---------- | ------ | ---------------------------------------------------------- |
| status     | string | Always "success" when the request succeeds                 |
| user.email | string | Your personal email address                                |
| user.name  | string | Your full name                                             |
| user.stack | string | Your backend technology stack                              |
| timestamp  | string | Current UTC time in ISO 8601 format                        |
| fact       | string | Random cat fact fetched dynamically from the Cat Facts API |

---

## Example

Request

GET https://profile-endpoint-hng-0.up.railway.app/me

Response

```json
{
  "status": "success",
  "user": {
    "email": "your-email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T11:45:09.512Z",
  "fact": "A group of cats is called a clowder."
}
```

---

## Error Responses

| Status | Example                                                                     | Description                                                           |
| -----: | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    500 | { "status": "error", "message": "Unable to fetch cat fact at the moment." } | Returned when the external Cat Facts API fails or times out           |
|    405 | Method Not Allowed                                                          | Returned when using an invalid HTTP method (e.g. POST instead of GET) |
|    404 | Page not found                                                              | Returned for invalid routes                                           |

---

## Built With

- Node.js
- Express.js
- Axios
- Morgan
- dotenv
- express-rate-limit
- CORS

---

## Author

Aladetan Fortune Ifeloju (IfeCodes)

Links: GitHub · Twitter · LinkedIn

---

_This file is the API documentation for the profile endpoint._
