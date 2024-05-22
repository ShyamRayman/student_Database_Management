import { RequestHandler } from "express";
import NoteModel from "../models/note";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid id");
    }

    const note = await NoteModel.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, "details not found");
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

interface createNoteBody {
  NAME?: string;
  EMAIL?: string;
  PHONE: string;
  ENROLLNUMBER: string;
  DATEOFADMISSION: string;
}

export const createNote: RequestHandler<
  unknown,
  unknown,
  createNoteBody,
  unknown
> = async (req, res, next) => {
  const NAME = req.body.NAME;
  const EMAIL = req.body.EMAIL;
  const PHONE = req.body.PHONE;
  const ENROLLNUMBER = req.body.ENROLLNUMBER;
  const DATEOFADMISSION = req.body.DATEOFADMISSION;
  try {
    if (!NAME) {
      throw createHttpError(400, "the student must have a name");
    }
    const newNote = await NoteModel.create({
      NAME: NAME,
      EMAIL: EMAIL,
      PHONE: PHONE,
      ENROLLNUMBER: ENROLLNUMBER,
      DATEOFADMISSION: DATEOFADMISSION,
    });
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

interface UpdateNoteParams {
  noteId: string;
}

interface UpdateNoteBody {
  NAME: string;
  EMAIL: string;
  PHONE: string;
  ENROLLNUMBER: string;
  DATEOFADMISSION: string;
}

export const updateNote: RequestHandler<
  UpdateNoteParams,
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  const noteId = req.params.noteId;
  const newName = req.body.NAME;
  const newEmail = req.body.EMAIL;
  const newPhone = req.body.PHONE;
  const newEnrollNumber = req.body.ENROLLNUMBER;
  const newDateOfAdmission = req.body.DATEOFADMISSION;

  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid id");
    }

    if (!newName) {
      throw createHttpError(400, "the student must have a name");
    }

    const note = await NoteModel.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, "details not found");
    }

    note.NAME = newName;
    note.EMAIL = newEmail;
    note.PHONE = newPhone;
    note.ENROLLNUMBER = newEnrollNumber;
    note.DATEOFADMISSION = newDateOfAdmission;

    const updatedNote = await note.save();

    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;

  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid id");
    }

    const note = await NoteModel.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    await note.deleteOne({ _id: noteId });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
