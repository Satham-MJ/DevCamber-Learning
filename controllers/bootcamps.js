// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.json({ success: true, description: "all bootcamp list" });
};

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res.json({ success: true, description: "single bootcamp list" });
};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
  res.json({ success: true, description: "bootcamp added" });
};

// @desc        update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res.json({ success: true, description: "bootcamp updated" });
};

// @desc        delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res.json({ success: true, description: `bootcamp deleted ${req.params.id}` });
};
