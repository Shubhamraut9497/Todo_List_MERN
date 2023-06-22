import express from 'express';
import {todo,getAllTodos} from '../controllers/todoController.js';

const router=express.Router();

router.post("/todo",todo);
router.get("/todo",getAllTodos);
export default router;