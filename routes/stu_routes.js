const express = require('express');
const router = express.Router();
const studentController = require('../controller/stu_controller');
const logger = require('../middleware/middleware');

router.get('/students', logger, studentController.getStudents);
router.post('/students', logger, studentController.addStudent);
router.put('/students/:id', logger, studentController.updateStudent);
router.delete('/students/:id', logger, studentController.deleteStudent);    

module.exports = router;