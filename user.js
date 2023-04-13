const updateUser = async (req, res, next) => {
  // res.send("sad")
  try {
    const savedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log(savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  // res.send("sad")
  try {
    const savedUser = await User.findByIdAndDelete(req.params.id);
    console.log(savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, err) => {
  // res.send("sad")
  try {
    const savedUser = await User.findById(req.params.id);
    console.log(savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  // res.send("sad")
  try {
    const savedUser = await User.find();
    console.log(savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
};
