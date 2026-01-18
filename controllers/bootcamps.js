const APIError = require("../utils/APIError");
const asyncHandler = require("../middleware/async");
const Bootcamp = require("../models/Bootcamp");
// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({ success: true, data: bootcamps });
});

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const bootcamp = await Bootcamp.findById(id);
  if (!bootcamp) {
    return next(new APIError(`Bootcamp not found with id of ${id}`, 404));
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
});

// @desc        update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bootcamp) {
      return res.status(500).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(500).json({ success: false, data: error.messsage });
  }
};

// @desc        delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(id);
    if (!bootcamp) {
      return res.status(500).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};
