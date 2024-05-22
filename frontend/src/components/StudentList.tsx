import "./StudentList.style.css";
import { Note } from "../models/note";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai"

interface NoteProps {
  note: Note;
  onNoteClicked: (note: Note)=> void,
  onDeleteNoteClicked: (note: Note) => void;
}
const StudentList = ({ note, onNoteClicked, onDeleteNoteClicked }: NoteProps) => {
  return (
    <tr>
      <td>
      <img
          src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"
          alt=""
          className="imgStudentList"
        />
        {note.NAME}
      </td>
      <td>{note.EMAIL}</td>
      <td>{note.PHONE}</td>
      <td>{note.ENROLLNUMBER}</td>
      <td>{note.DATEOFADMISSION}</td>
      <td>
      <AiTwotoneEdit  onClick={()=> onNoteClicked(note)} className="fs-5"/>
          <MdDelete
            className="text-danger ms-auto fs-5"
            onClick={(e) => {
              onDeleteNoteClicked(note);
              e.stopPropagation();
            }}
          />
         
        
      </td>
    </tr>
  );
};

export default StudentList;
