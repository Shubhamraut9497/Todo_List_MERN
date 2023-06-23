import express from "express";
import {
  todo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo
} from "../controllers/todoController.js";
const router = express.Router();

router.post("/todo", todo);
router.get("/todo", getAllTodos);
router.get("/todo/:id", toggleTodoDone);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router;
