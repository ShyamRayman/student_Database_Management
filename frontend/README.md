Technologies Used
React
React Hook Form
TypeScript

Components:
App.tsx
The main component that fetches student data, manages state, and renders other components.

NavbarAndSidebar.tsx
A responsive navigation bar and sidebar component.

StudentList.tsx
A component that displays a list of students in a table.

AddStudent.tsx
A modal form component for adding or editing a student.

DeleteConfirmationDialog.tsx
A modal dialog component for confirming the deletion of a student.

API calls are handled in network/notes_api.ts. The functions include:

fetchNotes: Fetch all notes.
createNote: Create a new note.
updateNote: Update an existing note.
deleteNote: Delete a note.

Styles
styles are added in various CSS files like AddStudent.css, DeleteConfirmationDialog.css, NavbarAndSidebar.css, and StudentList.style.css.

Running the Application
Open your browser and navigate to http://localhost:3000.

The frontend uses a proxy to communicate with the backend, which is configured in the package.json file of the frontend:
"proxy": "http://localhost:5000"

This Student Management System allows for easy management of student records through a user-friendly interface and a robust backend. The use of modern technologies like React and Express ensures a smooth development and user experience.