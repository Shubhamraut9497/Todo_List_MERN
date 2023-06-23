import express from 'express';
import {todo,getAllTodos,toggleTodoDone} from '../controllers/todoController.js';
const router=express.Router();

router.post("/todo",todo);
router.get("/todo",getAllTodos);
router.get("/todo/:id",toggleTodoDone);
export default router;