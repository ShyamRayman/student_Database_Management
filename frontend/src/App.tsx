import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Note } from "./models/note";
import { useState, useEffect } from "react";
import NavbarAndSideBar from "./components/NavbarAndSidebar";
import StudentList from "./components/StudentList";
import * as NotesApi from "./network/notes_api";
import AddStudent from "./components/AddStudent";
import Button from "react-bootstrap/Button";
import { MdDelete } from "react-icons/md";
import DeleteConfirmationDialog from "./components/DeleteConfirmationDialog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showAddStudent, setshowAddStudent] = useState(false);

  const [notetoEdit, setNoteToEdit] = useState<Note | null>(null);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  const handleDeleteNote = (note: Note) => {
    setNoteToDelete(note);
    setShowDeleteDialog(true);
  };

  const confirmDeleteNote = async () => {
    if (noteToDelete) {
      try {
        await NotesApi.deleteNote(noteToDelete._id);
        setNotes(
          notes.filter((existingNote) => existingNote._id !== noteToDelete._id)
        );
        setShowDeleteDialog(false);
        setNoteToDelete(null);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.NAME.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <NavbarAndSideBar/>

      <div className="main-content">
        
        <div className="controls d-flex">
        <div>
          <h2 className="mt-1 StudentsH2">Students</h2>
        </div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="inputSearch"
      />

  <button onClick={() => setshowAddStudent(true)} className="text-light ms-4 buttonAddNewStudent" >Add New Student</button>

      </div>

      <table className="container">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ENROLL NUMBER</th>
            <th>DATE OF ADMISSION</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map((note) => (
            <StudentList
              key={note._id}
              note={note}
              onNoteClicked={setNoteToEdit}
              onDeleteNoteClicked={handleDeleteNote}
            />
          ))}
        </tbody>
      </table>

      {showAddStudent && (
        <AddStudent
          onDismiss={() => setshowAddStudent(false)}
          onNoteSaved={(newNote) => {
            setNotes([...notes, newNote]);
            setshowAddStudent(false);
          }}
        />
      )}

      {notetoEdit && (
        <AddStudent
          notetoEdit={notetoEdit}
          onDismiss={() => setNoteToEdit(null)}
          onNoteSaved={(updatedNote) => {
            setNotes(
              notes.map((existingNote) =>
                existingNote._id === updatedNote._id
                  ? updatedNote
                  : existingNote
              )
            );
            setNoteToEdit(null);
          }}
        />
      )}

      {noteToDelete && (
        <DeleteConfirmationDialog
          show={showDeleteDialog}
          onHide={() => setShowDeleteDialog(false)}
          onConfirm={confirmDeleteNote}
        />
      )}
      </div>
    </div>
  );
}

export default App;
