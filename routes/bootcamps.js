const router = require("express").Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");
router.get("/:id", getBootcamp);
router.get("/", getBootcamps);
router.post("/", createBootcamp);
router.put("/:id", updateBootcamp);
router.delete("/:id", deleteBootcamp);
module.exports = router;
