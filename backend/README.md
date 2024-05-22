Technologies Used
Node.js
Express.js
MongoDB with Mongoose
TypeScript

API Endpoints
GET /api/notes - Retrieve all student notes.
GET /api/notes/:noteId - Retrieve a single student note by ID.
POST /api/notes - Create a new student note.
PATCH /api/notes/:noteId - Update an existing student note by ID.
DELETE /api/notes/:noteId - Delete a student note by ID.

Error Handling
Custom error handling is implemented to handle invalid IDs, missing required fields, and other potential issues.

Middleware
Morgan is used for logging HTTP requests.
Body Parser is used for parsing JSON request bodies.
HTTP Errors is used for generating custom HTTP errors.
