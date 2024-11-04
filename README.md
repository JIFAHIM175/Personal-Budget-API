Personal Budget API

A RESTful API built with Node.js and Express that allows users to manage a personal budget using envelope budgeting principles. The API provides CRUD operations for managing budget envelopes, a transfer feature to move funds between envelopes, and input validation for data integrity.

Features
Create, Read, Update, and Delete (CRUD) operations for budget envelopes
Transfer funds between envelopes
Input validation for secure and accurate data handling

Tech Stack
Node.js
Express.js

Getting Started

Prerequisites
Node.js (v12+)
npm (comes with Node.js)

Installation 
Clone the repository: https://github.com/JIFAHIM175/Personal-Budget-API.git

Navigate to the project directory: cd Personal-Budget-API

Install dependencies: npm install

Start the server:
node index.js
The server should start on http://localhost:3000.

Usage

Endpoints
1. Create a New Envelope
URL: /envelopes
Method: POST
Description: Creates a new budget envelope.
Request Body:
json
{
    "name": "Groceries",
    "amount": 500
}
Response:
json
{
    "id": 1,
    "name": "Groceries",
    "amount": 500
}

2. Retrieve All Envelopes
URL: /envelopes
Method: GET
Description: Retrieves a list of all envelopes.
Response:
json

   {
        "id": 1,
        "name": "Groceries",
        "amount": 500
    },
    {
        "id": 2,
        "name": "Entertainment",
        "amount": 200
    }
  
4. Retrieve a Specific Envelope
URL: /envelopes/:id
Method: GET
Description: Retrieves information for a specific envelope by ID.
Response:
json
{
    "id": 1,
    "name": "Groceries",
    "amount": 500
}

5. Update an Envelope
URL: /envelopes/:id
Method: PUT
Description: Updates an envelope’s name and/or amount.
Request Body:
json
{
    "name": "Updated Groceries",
    "amount": 600
}

Response:
json
{
    "id": 1,
    "name": "Updated Groceries",
    "amount": 600
}

6. Delete an Envelope
URL: /envelopes/:id
Method: DELETE
Description: Deletes an envelope by ID.
Response: 204 No Content

8. Transfer Funds Between Envelopes
URL: /envelopes/transfer/:fromId/:toId
Method: POST
Description: Transfers a specified amount from one envelope to another.
Request Body:
json
{
    "amount": 100
}
Response:
json
{
    "message": "Transferred 100 from envelope 1 to envelope 2",
    "sourceEnvelope": {
        "id": 1,
        "name": "Groceries",
        "amount": 400
    },
    "destinationEnvelope": {
        "id": 2,
        "name": "Entertainment",
        "amount": 300
    }
}

Error Handling
Each endpoint returns informative error messages if the input is invalid or if any resources are not found. Here are some example error responses:

400 Bad Request: Invalid data input

json
{
    "error": "Invalid envelope name or amount."
}
404 Not Found: Resource not found

json
Copy code
{
    "message": "Envelope not found"
}
