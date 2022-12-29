const express = require('express');
const studentsRouter = express.Router();


// Student model 
let StudentModel = require('../models/Student');

// Get all data 
studentsRouter.route('/').get((req, res, next) => {
    StudentModel.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data)
        }
    })
})

// Create student data
studentsRouter.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (err, data) => {
        if (err) {
            return nextk(err);
        } else {
            res.json(data)
        }
    })
})

// Edit student data
studentsRouter.route('/edit-student/:id').get((req, res, next) => {
    StudentModel.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data)
        }
    })
})

// Update student data 
studentsRouter.route('/update-student/:id').put((req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data)
            console.log('Student successfully')
        }
    })
})

// Delete student data 
studentsRouter.route('/delete-student/:id').delete((req, res, next) => {
    StudentModel.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentsRouter;