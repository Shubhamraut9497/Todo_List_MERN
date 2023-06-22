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
const getAllTodos = async () => {
  try {
    const res = await todoSchema.find({}).sort({ createdAt: -1 });
    return res; // Return the res object directly without calling json()
  } catch (err) {
    console.log(err);
  }
};

export { todo, getAllTodos };
