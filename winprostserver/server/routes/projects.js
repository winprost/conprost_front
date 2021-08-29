var express = require('express');
var router = express.Router();

const upload = require('../modules/multer');

const ProjectsController = require('../controllers/projectsController');

//router.post('/project', upload.single('image'), ProjectsController.createProject);
router.post('/project', ProjectsController.createProject);
router.get('/project/:categoryIdx', ProjectsController.showProjects);
router.get('/projectList',ProjectsController.getProjectList);
router.get('/search/:keyword', ProjectsController.searchByKeyword);
router.put('/period/:projectIdx', ProjectsController.updateProjectPeriod);

module.exports = router;