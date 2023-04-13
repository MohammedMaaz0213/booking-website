const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    console.log(savedHotel);
    res.status(200).json("succcess");
  } catch (err) {
    next(err);
  }
};

const updateHotel = async (req, res, next) => {
  // res.send("sad")
  try {
    const savedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

const deleteHotel = async (req, res, next) => {
  // res.send("sad")
  try {
    const savedHotel = await Hotel.findByIdAndDelete(req.params.id);
    console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

const getHotel = async (req, res, err) => {
  // res.send("sad")
  try {
    const savedHotel = await Hotel.findById(req.params.id);
    console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

const getHotels = async (req, res, next) => {
  // res.send("sad")
  try {
    const savedHotel = await Hotel.find();
    console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getHotel,
  getHotels,
  deleteHotel,
  updateHotel,
  createHotel,
};
