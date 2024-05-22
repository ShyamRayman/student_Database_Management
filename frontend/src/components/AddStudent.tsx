import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddStudent.css";
import { Note } from "../models/note";
import { NoteInput } from "../network/notes_api";
import { useForm } from "react-hook-form";
import * as NotesApi from "../network/notes_api";

interface AddStudentProps {
  notetoEdit?: Note;
  onDismiss: () => void;
  onNoteSaved: (note: Note) => void;
}

const AddStudent = ({
  notetoEdit,
  onDismiss,
  onNoteSaved,
}: AddStudentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>({
    defaultValues: {
      NAME: notetoEdit?.NAME || "",
      EMAIL: notetoEdit?.EMAIL || "",
      PHONE: notetoEdit?.PHONE || "",
      ENROLLNUMBER: notetoEdit?.ENROLLNUMBER || "",
      DATEOFADMISSION: notetoEdit?.DATEOFADMISSION || "",
    },
  });

  async function onSubmit(input: NoteInput) {
    try {
      let noteResponse: Note;
      if (notetoEdit) {
        noteResponse = await NotesApi.updateNote(notetoEdit._id, input);
      } else {
        noteResponse = await NotesApi.createNote(input);
      }

      onNoteSaved(noteResponse);
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the note.");
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>{notetoEdit ? "Edit Student" : "Add Student"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="addStudentform" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              isInvalid={!!errors.NAME}
              {...register("NAME", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.NAME?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Email"
              {...register("EMAIL", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.EMAIL?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Phone"
              {...register("PHONE", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.PHONE?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enroll Number"
              {...register("ENROLLNUMBER", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.ENROLLNUMBER?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Date of Admission"
              {...register("DATEOFADMISSION", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.DATEOFADMISSION?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="buttonDiv">
            <Button
              variant="success"
              type="submit"
              form="addStudentform"
              className="buttonSave"
              disabled={isSubmitting}
            >
              Submit
            </Button>

            <Button
              variant="danger"
              className="buttonClose"
              onClick={onDismiss}
            >
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddStudent;
