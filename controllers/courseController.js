const Course = require("../models/Course");


// View All Courses
exports.getCourses = async(req,res)=>{
    const courses = await Course.find();

    res.render("index",{
        courses
    });
};



// Add Form
exports.addForm = (req,res)=>{
    res.render("add");
};



// Add Course
exports.addCourse = async(req,res)=>{

    await Course.create(req.body);

    res.redirect("/");
};



// Edit Form
exports.editForm = async(req,res)=>{

    const course = await Course.findById(req.params.id);

    res.render("edit",{
        course
    });
};



// Update Course
exports.updateCourse = async(req,res)=>{

    await Course.findByIdAndUpdate(
        req.params.id,
        req.body
    );

    res.redirect("/");
};



// Delete Course
exports.deleteCourse = async(req,res)=>{

    await Course.findByIdAndDelete(
        req.params.id
    );

    res.redirect("/");
};



// Search Course
exports.searchCourse = async(req,res)=>{

    const search = req.query.search;

    const courses = await Course.find({
        courseName:{
            $regex:search,
            $options:"i"
        }
    });

    res.render("index",{courses});
};
