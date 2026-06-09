module.exports = (req, res, next) => {
  const { title, status } = req.body;

  if (!title || !status) {
    return res.status(400).json({
      message: "title and status are required"
    });
  }

  next();
};