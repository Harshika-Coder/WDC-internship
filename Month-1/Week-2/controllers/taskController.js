let tasks = [];
let id = 1;

// GET all tasks
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// GET task by id
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

// CREATE task
exports.createTask = (req, res) => {
  const { title, status } = req.body;

  const newTask = {
    id: id++,
    title,
    status
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

// UPDATE task (replace)
exports.updateTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, status } = req.body;

  tasks[index] = {
    id: Number(req.params.id),
    title,
    status
  };

  res.json(tasks[index]);
};

// DELETE task
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.json({ message: "Task deleted successfully" });
};

// FILTER by status
exports.filterByStatus = (req, res) => {
  const { status } = req.query;

  const filtered = tasks.filter(t => t.status === status);

  res.json(filtered);
};