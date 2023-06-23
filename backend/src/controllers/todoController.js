import todoSchema from "../models/todoSchema.js";

const todo = async (req, res) => {
  const item = req.body.data;
  try {
    const list = new todoSchema({
      item: item,
    });
    const data = await list.save();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
 const getAllTodos = async (request, response) => {
  try {
      const todos = await todoSchema.find({}).sort({ 'createdAt': -1 })

      return response.status(200).json(todos);
  } catch (error) {
      return response.status(500).json(error.message);
  }
}
 const toggleTodoDone = async (request, response) => {
  try {
      const todoRef = await todoSchema.findById(request.params.id);

      const todo = await todoSchema.findOneAndUpdate(
          {_id:request.params.id,},
          { done: !todoRef.done }
      )

      await todo.save();

      return response.status(200).json(todo);
  } catch (error) {
      return response.status(500).json(error.message);
  }
}
export { todo, getAllTodos,toggleTodoDone };
