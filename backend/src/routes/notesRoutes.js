import express from "express";
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from "../controllers/notesControllers.js ";

const router = express.Router();

// GET all notes
router.get("/", getAllNotes);
// GET specific note 
router.get("/:id", getNoteById)
// CREATE a note
router.post("/", createNote);
// UPDATE a note
router.put("/:id", updateNote);
// DELETE a note
router.delete("/:id", deleteNote);

export default router;
