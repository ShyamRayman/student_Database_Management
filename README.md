my live site  = https://664da16c8fe901b6ec98c2d7--frolicking-douhua-e69466.netlify.app/

This project is a MERN stack application designed to manage student details. The backend is built using Node.js, Express, and MongoDB, providing a RESTful API for creating, reading, updating, and deleting student records. The frontend is built using React,typescript, offering a user-friendly interface for interacting with the student database.

Backend Overview
Features
Create a New Student Record: Add a new student's details to the database.
Retrieve All Student Records: Fetch a list of all students.
Retrieve a Single Student Record by ID: Get details of a specific student using their ID.
Update an Existing Student Record by ID: Modify the details of an existing student.
Delete a Student Record by ID: Remove a student's details from the database.
Implementation
The backend consists of several key components:

Models: Defines the structure of the data using Mongoose schemas.
Controllers: Contains the logic for handling HTTP requests and interacting with the database.
Routes: Maps HTTP requests to the appropriate controller functions.
Application Setup: Configures the Express application and middleware.
Server Initialization: Connects to the MongoDB database and starts the server.


Frontend Overview
Features
Add New Student: A form to add a new student record to the database.
Edit Student Details: A form to update an existing student's details.
Delete Student: A confirmation dialog to delete a student record.
Search Students: A search bar to filter the list of students by name.
Responsive Design: A sidebar that toggles visibility based on screen width.


Components
The frontend consists of several key components:

App: The main component that initializes the application and manages the state of student records.
AddStudent: A modal form to add or edit student details.
DeleteConfirmationDialog: A modal dialog to confirm the deletion of a student record.
NavbarAndSidebar: A responsive navigation bar and sidebar for the application.
StudentList: Displays the list of students with options to edit or delete each student.

Workflow
Fetching Data: The application fetches student records from the backend API and displays them in a table.
Adding a Student: Users can open a modal form to add a new student. The form data is sent to the backend API to create a new record.
Editing a Student: Users can open a modal form to edit an existing student's details. The updated data is sent to the backend API to update the record.
Deleting a Student: Users can confirm the deletion of a student record via a modal dialog. The deletion request is sent to the backend API.
Searching Students: Users can filter the list of students by name using a search bar.

