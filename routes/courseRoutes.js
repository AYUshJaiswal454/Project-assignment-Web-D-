const express = require("express");

const router = express.Router();

const courseController =require("../controllers/courseController");

router.get("/",courseController.getCourses);



router.get("/add",courseController.addForm);



router.post("/add",courseController.addCourse);



router.get("/edit/:id",courseController.editForm);



router.post("/update/:id",courseController.updateCourse);




router.get("/delete/:id", courseController.deleteCourse);




router.get("/search",courseController.searchCourse);

module.exports = router;
